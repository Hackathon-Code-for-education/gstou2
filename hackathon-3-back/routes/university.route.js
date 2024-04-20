const Router = require("express");
const router = Router();
const {
  universityController,
} = require("../controllers/university.controller");
const createMulter = require("../middleware/image.middleware");
const productUpload = createMulter("university");

router.post(
  "/university",
  productUpload.array("image"),
  universityController.registerUniversity
);
router.get("/university/:id", universityController.getUniversity);
router.get("/university", universityController.getAllUniversity);
router.patch(
  "/university/:id",
  productUpload.array("image"),
  universityController.patchUniversity
);

module.exports = router;
