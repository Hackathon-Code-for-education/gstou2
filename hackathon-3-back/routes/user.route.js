const Router = require('express');
const router = Router();
const { userController } = require('../controllers/user.controller')

router.post('/user', userController.registerUser);
router.post('/login', userController.login);
router.get('/user', userController.getUser);
router.patch('/path', userController.patchUser);

module.exports = router;