const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    productId:{
        type:String,
        require:true,
        unique:true  
    },
    name:{
        type:String,
        require:true,
    },
    supllier:{
        type:String,
    },
    group:{
        type:String,

    },
    price:{
        type:Number,
    },
    total:{
        type:Number,
    },

},{timestamps:true});

module.exports=mongoose.model('Prodcts',ProductSchema);