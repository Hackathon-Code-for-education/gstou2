const Router = require('express');
const router = Router();
const { instituteController } = require('../controllers/institute.controller')

router.post('/institute', instituteController.createInstitute);
router.get('/institute', instituteController.getInstitutes);

module.exports = router;