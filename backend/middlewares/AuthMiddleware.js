const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const jwtSecret = secrets.jwtSecret;

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({message: 'user is unauthorized'});
        }

        req.user = jwt.verify(token, jwtSecret);
        next();
    } catch (err) {
        console.log(err);
        return res.status(403).json({message: 'user is unauthorized'});
    }
}