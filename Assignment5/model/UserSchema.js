const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    status:{
        type:Number,
        default : 0
    }
});

module.exports=mongoose.model("user",userSchema);