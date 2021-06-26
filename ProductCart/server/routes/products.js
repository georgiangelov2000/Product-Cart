const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

router.get("/", asyncHandler(async (req, res) => {
    const products = await Product.find({});

    if(products){
        res.json(products);
    }else{
        res.status(404).json({ message: "Products not found ! " });
    }

  })
);

router.get("/:id", asyncHandler (async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found ! " });
  }
}));

module.exports = router;
