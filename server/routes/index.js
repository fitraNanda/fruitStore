const route = require("express").Router();
const fruitRouter = require("./FruitRouter");
const categoriesRouter = require("./categoriesRouter");
const brandRouter = require("./brandRouter");

route.get("/", (req, res) => {
  res.render("index.ejs");
});

route.use("/fruits", fruitRouter);
route.use("/categories", categoriesRouter);
route.use("/brands", brandRouter);

module.exports = route;
