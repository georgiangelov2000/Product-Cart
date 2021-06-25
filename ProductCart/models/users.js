const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
})

module.exports=mongoose.model("User",userSchema);
