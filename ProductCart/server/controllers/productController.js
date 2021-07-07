const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const products = require("../products");

const getProducts = asyncHandler(async (req, res) => {
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product=products.find(p => p.id === req.params.id);
  res.json(product);
});



module.exports = {
  getProducts,
  getProductById
};
