const Router = require("express");
const router = Router();
const {
  universityController,
} = require("../controllers/university.controller");

router.post("/university", universityController.registerUniversity);
router.get("/university", universityController.getUniversity);
router.patch("/university/:id", universityController.patchUniversity);

module.exports = router;
