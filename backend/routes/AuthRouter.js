const { Router } = require('express');
const router = new Router();
const controller = require ('../controllers/AuthController');
const { check } = require('express-validator');

// Full path: /api/auth/sign_up
router.post('/sign_up', [
    check('email', 'Incorrect email').isEmail(),
    check('password', 'The password must contain at least 6 characters').isLength({ min: 6 })
], controller.signUp);

// Full path: /api/auth/sign_in
router.post('sign_in', controller.signIn);

// Full path: /api/auth/auth
router.get('/auth', controller.getUser);

module.exports = router;