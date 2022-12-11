const { Categories } = require("../models");

class CategoriesController {
  static async get(req, res) {
    try {
      let fruits = await Categories.findAll({
        order: [["id", "ASC"]],
      });

      res.status(200).send(fruits);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async addPost(req, res) {
    try {
      const { name } = req.body;
      let result = await Categories.create({
        name: name,
      });

      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await Categories.destroy({
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
      const { name } = req.body;

      const id = +req.params.id;

      let result = await Categories.update(
        {
          name: name,
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

module.exports = CategoriesController;
