const express = require("express");
const app = express();
const dotenv=require('dotenv');
const mongoose = require('mongoose');

const productRoutes=require("./routes/product");

dotenv.config({path:'./config.env'})

app.use(express.json({ extended: false }));


mongoose.connect(process.env.DB_LOCAL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useCreateIndex:true,
    useUnifiedTopology: true
})

app.use("/api/products",productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on port " + PORT));