const express = require("express");
const app = express();

const dotenv=require('dotenv');
const mongoose = require('mongoose');

const cors=require('cors');

const userRoute=require("./routes/userRoute");

dotenv.config({path:'./config.env'})

app.use(cors());
app.use(express.json({ extended: false }));

mongoose.connect(process.env.DB_LOCAL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify:true,
});

app.use("/api/users",userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on port " + PORT));