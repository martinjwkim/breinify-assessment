const { NotFoundError } = require("../expressError");

class Product {
  static async create(data) {
    const fs = require("fs");

    try {
      let productsjson = fs.readFileSync("./products.json", "utf8");
      let products = JSON.parse(productsjson);
      let id = products.length + 1;
      products.push({ ...data, id });

      fs.writeFileSync("./products.json", JSON.stringify(products));

      return products.find((p) => p.id === id);
    } catch (err) {
      console.error(err);
    }
  }

  static async findAll() {
    const fs = require("fs");

    try {
      const product = fs.readFileSync("./products.json", "utf8");
      return product;
    } catch (err) {
      console.error(err);
    }
  }

  static async get(id) {
    try {
      let productsjson = fs.readFileSync("./products.json", "utf8");
      let products = JSON.parse(productsjson);
      let product = products.find((p) => p.id === id);

      if (!product) throw new NotFoundError(`No product: ${id}`);

      return product;
    } catch (err) {
      console.error(err);
    }
  }

  static async update(id, data) {
    try {
      let productsjson = fs.readFileSync("./products.json", "utf8");
      let products = JSON.parse(productsjson);
      let productIndex = products.findIndex((p) => p.id === id);

      if (productIndex < 0) throw new NotFoundError(`No product: ${id}`);

      products[productIndex].productName = data.productName;
      products[productIndex].productImg =
        data.productImg || products[productIndex].productImg;

      fs.writeFileSync("./products.json", JSON.stringify(products));

      return products[productIndex];
    } catch (err) {
      console.error(err);
    }
  }

  static async remove(id) {
    try {
      let productsjson = fs.readFileSync("./products.json", "utf8");
      let products = JSON.parse(productsjson);
      let productIndex = products.findIndex((p) => p.id === id);

      if (productIndex < 0) throw new NotFoundError(`No product: ${id}`);

      let product = products.splice(productIndex, 1);

      fs.writeFileSync("./products.json", JSON.stringify(products));

      return product;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = Product;
