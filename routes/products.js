const router = require('express').Router();
const Product = require('../models/Products');
const Group=require('../models/Group');

//Add Product
router.post('/add',async(req,res)=>{
    try{
        const newProduct=await new Product({
            productId:req.body.productId,
            productName:req.body.productName,
        });
        const product=await newProduct.save();
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }
});

//update
//Get product by id
//Get all product

router.get("/",async(req,res)=>{
    try{
        const product=await Product.find();
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }
});

//delete product
///////////////////////////////////////////////////////////////////////////////////////////
///Group
router.get("/group",async(req,res)=>{
    try{
        const group=await Group.find();
        res.status(200).json(group);
    }catch(err){
        res.status(500).json(err);

    }
    
});
//Add group

router.post('/group/add',async(req,res)=>{
    try{
        const newGroup=await new Group({
            groupId:req.body.groupId,
            groupName:req.body.groupName
        });

        const group=await newGroup.save();
        res.status(200).json(group);
    }catch(err){
        res.status(500).json(err);
    }

});



module.exports=router;