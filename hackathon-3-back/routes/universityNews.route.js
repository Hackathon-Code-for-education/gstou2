const Router = require("express");
const { universityNewsController } = require("../controllers/universityNews.controller");
const router = Router();
const createMulter = require("../middleware/image.middleware");
const productUpload = createMulter("news");


router.get("/news:id", universityNewsController.getOneNews);
router.get("/news", universityNewsController.getNews);
router.post("/news", productUpload.array("photo"), universityNewsController.createNews);
router.patch(
  "/news:id",
  productUpload.array("photo"),
  universityNewsController.updateNews
);
router.delete("/news:id", universityNewsController.deleteNews);

module.exports = router;
