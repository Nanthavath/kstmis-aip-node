const mongosse=require('mongoose');

const SalesSchema=new mongosse.Schema({
    saleId:{
        type:String,
        
    },
    year:{
        type:String,
        
    },
    month:{
        type:String,
        // default:Date().getMonth(),
    },
    province:{
        trype:String
    },
    item:{
        type:String,
    },
    total:{
        type:Number
    }

},{timestamps:true});

module.exports=mongosse.model("Sales",SalesSchema);