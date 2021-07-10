import asyncHandler from  'express-async-handler';
import products from  '../products.js';

const getProducts = asyncHandler(async (req, res) => {
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product=products.find(p => p.id === req.params.id);
  res.json(product);
});



export {
  getProducts,
  getProductById
};
