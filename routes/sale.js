const router=require('express').Router();
const Sales=require('../models/Sales');

///Add Sales
router.post('/AddSale',async(req,res)=>{
    try{
        const newSale=await new Sales({
            saleId:req.body.saleId,
            month:req.body.month,
            province:req.body.province,
            item:req.body.item,
            total:req.body.total,
            year:req.body.year

        });
        const sale=await newSale.save();
        res.status(200).json(sale);

    }catch(err){
        res.status(500).json(err);
    }

});

//Get all

router.get("/",async(req,res)=>{
    try{
        const sale=await Sales.find();
        res.status(200).json(sale);

    }catch(err){
        res.status(500).json(err);
    }

});

module.exports=router;