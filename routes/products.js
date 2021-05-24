const router = require('express').Router();
const Product = require('../models/Products');
const Group=require('../models/Group');

//Add Product
router.post('/add',async(req,res)=>{
    try{
        const newProduct=await new Product({
            productId:req.body.productId,
            name:req.body.name,
            supplier:req.body.supplier,
            group:req.body.group,
            price:req.body.price,
            total:req.body.total,
        });
        const product=await newProduct.save();
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }
});

//update

router.put("/:id",async(req,res)=>{
    try{
        const product=await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        });
        return res.status(200).json('Update Successfully');
    }catch(err){ 
        return res.status(500).json(err);
    }

});

///Delete

router.delete("/:id",async(req,res)=>{
    try{
        const product=await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json('Delete Successfully');

    }catch(err){
        return res.status(500).json(err);
    }
});
//Get product by id
router.get("/:id",async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
        return res.status(200).json(product);

    }catch(err){
        return res.status(500).json(err);
    }
});

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