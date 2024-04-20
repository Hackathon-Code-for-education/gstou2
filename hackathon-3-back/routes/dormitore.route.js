const Router = require('express');
const router = Router();
const { dormitoreController } = require('../controllers/dormitore.controller');

router.get('/dormitore', dormitoreController.getDormitore);
router.post('/addDorm', dormitoreController.createDormitore);

module.exports = router;