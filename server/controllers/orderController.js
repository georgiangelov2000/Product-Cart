import asyncHandler from "express-async-handler";
import Order from "../models/productModel.js";

const addOrderItems = asyncHandler(async (req, res) => {
  
    const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if(orderItems && orderItems.length===0){
    res.status(400)
    throw new Error('No order items')
  }else{
    const order=new Order({
        orderItems,
        urser:req.user.id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    })
    const createOrder=await order.save()
    res.status(201).json(createOrder)
  }

});

export{ addOrderItems }