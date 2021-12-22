// const { NotFoundError } = require("../expressError");

/** Related functions for products. */

class Product {
  static async create(data) {}

  static async findAll() {}

  static async get(id) {
    // if (!product) throw new NotFoundError(`No product: ${id}`);
  }

  static async update(id, data) {}

  static async remove(id) {}
}

module.exports = Product;
