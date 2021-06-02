const router=require('express').Router();
const Province=require('../models/Provinces');

///Add Province

router.post('/add',async(req,res)=>{
    try{
        const newProvince=await new Province({
            id:req.body.id,
            province:req.body.province,
            part:req.body.part,
            
        });
        const province=await newProvince.save();
        res.status(200).json(province);

    }catch(err){
        res.status(500).json(err);
    }

});

//Get data

router.get("/",async(req,res)=>{
    try{
        const province=await Province.find();
        res.status(200).json(province);
    }catch(err){
        res.status(500).json(err);
    }

});

module.exports=router;