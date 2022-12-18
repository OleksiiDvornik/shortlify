const { Router } = require('express');
const router = new Router();
const controller = require('../controllers/RedirectController');

// Full path: /t/:code
router.get('/:code', controller.getCode);

module.exports = router;