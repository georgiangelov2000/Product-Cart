const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const { check, validationResult } = require("express-validator");

router.post("/create", async (req, res) => {
  try {
    const { productName, price, category, photo, weight, color } = req.body;

    const product = {
      productName,
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

router.delete("/:id",async (req,res)=>{

  try {
  await  Product.findByIdAndDelete(req.params.id)
    .then((data)=>{
      res.json(data)
    }).catch((error)=>{
      console.error(error.message);
    })    
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error")
  }

})

router.put("/:id",async(req,res)=>{
  try {
    await Product.findByIdAndUpdate(req.params.id,{
      $set: {
          productName:req.body.productName,
          price:req.body.price,
          category:req.body.category,
          photo:req.body.photo,
          weight:req.body.weight,
          photo:req.body.photo,
      }
    })
    .then((data)=>{
      res.json(data);
    })
    .catch((error)=>{
     console.error(error.message);
    })
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error")
  }
})

router.get("/:id", async(req,res)=>{
  try {
    await Product.findById(req.params.id)
    .then((data)=>{
      res.json(data)
    }).catch((error)=>{
      console.error(error.message);
    })
  } catch (error) {
    return res.status(500).send("Server error");
  }
})

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
