const { Fruits, Brands, Categories } = require("../models");

class FruitsController {
  static async get(req, res) {
    try {
      let fruits = await Fruits.findAll({
        order: [["id", "ASC"]],
        include: [Brands, Categories],
      });

      res.status(200).send(fruits);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  }

  static async addPost(req, res) {
    try {
      const { name, image, price, stock, BrandId, CategoryId } = req.body;
      let result = await Fruits.create({
        name: name,
        image: image,
        price: +price,
        stock: +stock,
        BrandId: +BrandId,
        CategoryId: +CategoryId,
      });

      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await Fruits.destroy({
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
      const { name, image, price, stock, BrandId, CategoryId } = req.body;

      const id = +req.params.id;

      let result = await Fruits.update(
        {
          name: name,
          image: image,
          price: +price,
          stock: +stock,
          BrandId: +BrandId,
          CategoryId: +CategoryId,
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

module.exports = FruitsController;
