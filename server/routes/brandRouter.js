const brandRouter = require("express").Router();
const BrandController = require("../controllers/brandController");

brandRouter.get("/", BrandController.get);
brandRouter.get("/add", BrandController.addGet);
brandRouter.post("/add", BrandController.addPost);
brandRouter.get("/delete/:id", BrandController.delete);
brandRouter.get("/update/:id", BrandController.updateGet);
brandRouter.post("/update/:id", BrandController.updatePost);

module.exports = brandRouter;
