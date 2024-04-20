const Router = require("express");
const router = Router();
const {
  universityController,
} = require("../controllers/university.controller");
const createMulter = require("../middleware/image.middleware");
const productUpload = createMulter("university");

router.post(
  "/university",
  productUpload.array("photo"),
  universityController.registerUniversity
);
router.get("/university", universityController.getUniversity);
router.patch(
  "/university/:id",
  productUpload.array("photo"),
  universityController.patchUniversity
);

module.exports = router;
