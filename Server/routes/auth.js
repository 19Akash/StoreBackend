const express = require('express');
const authRouter= express.Router();

const app =express();
const User = require('../models/user')


app.use(express.json());



authRouter
.route('/signup')
.post(postSignUp)

authRouter
.route('/signin')
.post(postSignIn)





async function postSignUp(req,res){

    const check=await User.findOne({email:req.body.email});
    if(check)
    {
        res.json({
            message:"User is already exist",
        })
    }
    else
    {
            const user=User.create(req.body)
            console.log(req.body);
            if(user)
            {
                res.status(200).json({
                    message:"data Recieved from post request",
                    data:req.body
                })
            }
            else{
                res.status(500).json({
                    message:"Internal Error"
                })
            }
    }
}

async function postSignIn(req,res){
    const user=await User.findOne({email:req.body.email});
    console.log(user);
    if(user)
    {
        res.json({
        message:"data sent",
        data:user
       })
    }
    else{
        res.json({
            message:"user not found"
        })
    }

}

module.exports=authRouter