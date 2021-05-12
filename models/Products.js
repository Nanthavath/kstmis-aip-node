const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    productId:{
        type:String,
        require:true,
        unique:true  
    },
    productName:{
        type:String,
        require:true,
    }
},{timestamps:true});

module.exports=mongoose.model('Prodcts',ProductSchema);