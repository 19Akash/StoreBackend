const mongoose = require('mongoose');


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
        min:8
    },
    reEnterPassword:{
        type:String,
        required:true,
        min:8
    }
})

const User =mongoose.model('Users',userSchema);

module.exports= User;
