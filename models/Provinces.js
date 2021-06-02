const mongoose=require('mongoose');

const ProvinceSchema=new mongoose.Schema(
    {
        id:{
            type:String
        },
        province:{
            type:String,
        },
        part:{
            type:String
        }
        
    }
);

module.exports=mongoose.model("Province",ProvinceSchema);