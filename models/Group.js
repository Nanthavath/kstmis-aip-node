const mongoose=require('mongoose');

const GroupSchema=new mongoose.Schema({
    groupId:{
        type:String,
        require:true,
    },
    groupName:{
        type:String,
        require:true,
    }

},{timestamps:true});

module.exports=mongoose.model('Group',GroupSchema);