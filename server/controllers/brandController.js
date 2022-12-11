const { Brands } = require("../models");

class BrandController {
  static async get(req, res) {
    try {
      let fruits = await Brands.findAll({
        order: [["id", "ASC"]],
      });

      res.status(200).send(fruits);
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

      res.status(200).send(result);
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
        res.send("berhasil");
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
        res.status(200).send(result);
      } else {
        throw {
          message: "id not found",
        };
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = BrandController;
