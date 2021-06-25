const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const { check, validationResult } = require("express-validator");

router.post("/create", async (req, res) => {
  try {
    const { name, price, category, photo, weight, color } = req.body;

    const product = {
      name,
      price,
      category,
      photo,
      weight,
      color,
    };
    await Product.create(product)
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error");
  }
});

router.get("/", async (req, res) => {

  try {
    await Product.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error");
  }

});

module.exports = router;
