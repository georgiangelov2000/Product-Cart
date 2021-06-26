const express = require("express");
const app = express();
const dotenv=require('dotenv');
const mongoose = require('mongoose');

const productsRoute=require("./routes/products");

dotenv.config({path:'./config.env'})

app.use(express.json({ extended: false }));

mongoose.connect(process.env.DB_LOCAL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify:true,
});

app.get("/api/products",productsRoute);;

app.use((req,res,next)=>{
    const error=new Error(`Not found - ${req.originalUrl}`)
    res.status(404);
    next(error);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on port " + PORT));