const categoriesRouter = require("express").Router();
const CategoriesController = require("../controllers/categoriesController");

categoriesRouter.get("/", CategoriesController.get);
categoriesRouter.get("/add", CategoriesController.addGet);
categoriesRouter.post("/add", CategoriesController.addPost);
categoriesRouter.get("/delete/:id", CategoriesController.delete);
categoriesRouter.get("/update/:id", CategoriesController.updateGet);
categoriesRouter.post("/update/:id", CategoriesController.updatePost);

module.exports = categoriesRouter;
