const fruitRouter = require("express").Router();
const FruitsController = require("../controllers/fruitController");

fruitRouter.get("/", FruitsController.get);
// fruitRouter.get("/add", FruitsController.addGet);
fruitRouter.post("/add", FruitsController.addPost);
fruitRouter.get("/delete/:id", FruitsController.delete);
// fruitRouter.get("/update/:id", FruitsController.updateGet);
fruitRouter.post("/update/:id", FruitsController.updatePost);

module.exports = fruitRouter;
