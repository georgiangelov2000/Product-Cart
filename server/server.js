import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express()

dotenv.config()

import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoutes.js';

const url=('mongodb://localhost:27017/product-cart')

app.use(cors());
app.use(express.json({ extended: false }));

mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify:true,
});

app.use('/api/users',userRoute);
app.use('/api/products',productRoute);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log("Server started on port " + PORT));
