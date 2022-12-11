const { Brands } = require("../models");

class BrandController {
  static async get(req, res) {
    try {
      let fruits = await Brands.findAll({
        order: [["id", "ASC"]],
      });

      // res.status(200).send(fruits);
      res.render("brands/brands.ejs", { data: fruits });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async addPost(req, res) {
    try {
      const { name, image, city, total_employees } = req.body;
      let result = await Brands.create({
        name: name,
        image: image,
        city,
        total_employees: +total_employees,
      });

      // res.status(200).send(result);
      res.redirect("/brands");
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await Brands.destroy({
        where: { id },
      });

      if (result) {
        // res.send("berhasil");
        res.redirect("/brands");
      } else {
        res.send("id not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async updatePost(req, res) {
    try {
      const { name, image, city, total_employees } = req.body;

      const id = +req.params.id;

      let result = await Brands.update(
        {
          name: name,
          image: image,
          city,
          total_employees: +total_employees,
        },
        {
          where: { id },
        }
      );

      if (result[0]) {
        // res.status(200).send(result);
        res.redirect("/brands");
      } else {
        throw {
          message: "id not found",
        };
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async addGet(req, res) {
    res.render("brands/post.ejs");
  }

  static async updateGet(req, res) {
    try {
      const id = +req.params.id;
      let result = await Brands.findByPk(id);

      res.render("brands/update.ejs", { data: result });
      // res.send(result);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = BrandController;
