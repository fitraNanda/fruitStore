const route = require("express").Router();
const fruitRouter = require("./FruitRouter");
const categoriesRouter = require("./categoriesRouter");
const brandRouter = require("./brandRouter");

route.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

route.use("/fruits", fruitRouter);
route.use("/categories", categoriesRouter);
route.use("/brands", brandRouter);

module.exports = route;
