/** Routes for products. */

const express = require("express");
const Product = require("../models/product");

const router = express.Router({ mergeParams: true });

router.post("/", async function (req, res, next) {
  try {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  } catch (err) {
    return next(err);
  }
});

router.get("/", async function (req, res, next) {
  try {
    const products = await Product.findAll();
    return res.json(products);
  } catch (err) {
    return next(err);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const product = await Product.get(req.params.id);
    return res.json(product);
  } catch (err) {
    return next(err);
  }
});

router.patch("/:id", async function (req, res, next) {
  try {
    const product = await Product.update(req.params.id, req.body);
    return res.json(product);
  } catch (err) {
    return next(err);
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    const product = await Product.remove(req.params.id);
    return res.json(product);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
