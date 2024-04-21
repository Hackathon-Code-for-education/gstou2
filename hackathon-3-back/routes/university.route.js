const Router = require("express");
const router = Router();
const {
  universityController,
} = require("../controllers/university.controller");
const createMulter = require("../middleware/image.middleware");
const productUpload = createMulter("university");
const authMiddleware = require("../middleware/auth.middleware");

router.post(
  "/university/:id",
  productUpload.array("image"),
  universityController.createUniversity
);
router.get("/university/:id", universityController.getUniversity);
router.get("/university", universityController.getAllUniversity);
router.post(
  "/university/:id",
  productUpload.array("image"),
  universityController.patchUniversity
);
router.delete("/university/:id", universityController.deleteUniversity);

router.post(
  "/university/addComment/:id",
  authMiddleware,
  universityController.addComment
);
router.post(
  "/university/addUser/:id",
  universityController.addUserToUniversity
);
router.post(
  "/university/deleteUser/:id",
  authMiddleware,
  universityController.deleteUserUniversity
);

module.exports = router;
