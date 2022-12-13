const User = require('../models/UserModel');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const jwtSecret = secrets.jwtSecret;

const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, jwtSecret, {expiresIn: '2h'});
}

class AuthController {
    async signUp (req, res) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array(), message: 'Sign up error'});
            }

            const {email, password} = req.body;
            const candidate = await User.findOne({email});

            if (candidate) {
                return res.status(400).json({message: 'user already exists'});
            }

            const hashPassword = bcrypt.hashSync(password, 7);
            const user = new User({email, password: hashPassword});

            await user.save();

            return res.status(201).json({message: 'user has been successfully created'});
        } catch (err) {
            console.log(err.message);
            res.status(500).json({message: 'Sign up error'});
        }
    }

    async signIn (req, res) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array(), message: 'Sign up error'});
            }

            const {email, password} = req.body;
            const user = await User.findOne({email});

            if (!user) {
                return res.status(400).json({message: 'user is not found'});
            }

            const isPasswordMatch = bcrypt.compareSync(password, user.password);

            if (!isPasswordMatch) {
                return res.status(400).json({message: 'Invalid password'});
            }

            const token = generateAccessToken(user.id);

            return res.json({token, userId: user.id});
        } catch (err) {
            console.log(err.message);
        }
    }

    async getUser (req, res) {
        try {
            const user = await User.findOne({id: req.user.id})
            const token = generateAccessToken(user.id);
            return res.json({token, userId: user.id});
        } catch (err) {
            console.log(err.message);
            res.status(401).json({message: 'Auth error'});
        }
    }

}

module.exports = new AuthController();