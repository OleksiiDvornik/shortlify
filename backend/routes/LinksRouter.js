const { Router }  = require('express')
const router = new Router();
const controller = require ('../controllers/LinksController');
const authMiddleware = require('../middlewares/AuthMiddleware');

// Full path: /api/links/generate
router.post('/generate', authMiddleware, controller.generateLink);

// Full path: /api/links/
router.get('/', authMiddleware, controller.getAllLinks);

// Full path: /api/links/:id
router.get('/:id', authMiddleware, controller.getLink);

// Full path: /api/links/delete/:id
router.delete('/delete/:id', authMiddleware, controller.deleteLink);

module.exports = router;