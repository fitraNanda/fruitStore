const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
app.set("view-engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
  console.log("server berjalan pada port", +port);
});
