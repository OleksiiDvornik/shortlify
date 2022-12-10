const User = require('../models/UserModel');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/secrets');

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
                return res.status(400).json({message: 'User already exists'});
            }

            const hashPassword = bcrypt.hashSync(password, 7);
            const user = new User({email, password: hashPassword});

            await user.save();

            return res.status(201).json({message: 'User has been successfully created'});
        } catch (err) {
            console.log(err.message);
            res.status(500).json({message: 'Sign up error'});
        }
    }

    async signIn (req, res) {
        try {
            const errors = validationResult(req);

        } catch (err) {
            console.log(err.message);
        }
    }

    async getUser (req, res) {
        try {

        } catch (err) {
            console.log(err.message);
        }
    }

}

module.exports = new AuthController();