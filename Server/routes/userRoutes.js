
const express = require('express');
const userRouter= express.Router();
let cors = require('cors');
const app =express();
const User = require('../models/user')


app.use(express.json());
app.use(cors())


userRouter
.route('/')
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)

userRouter
.route('/:id')
.get(getUserById)



function getUser(req,res){
    res.send(users);
}
function postUser(req,res){
    console.log(req.body);
    users=req.body
    res.json({
        message: "data post successful",
        data:req.body
    })
}
function updateUser(req,res){
    const dataToBeUpdated=req.body;
    for(key in dataToBeUpdated)
    {
        users[key]=dataToBeUpdated[key];
    }
    res.json({
        message:"patch request recieved"
    })
}
function deleteUser(req,res){
    let email=req.body.email
    if(users.email===email)
    {
        console.log("hoolo")
        users={}
    }
    if(users)
    {
        res.json({
            message:"user is deleted"
        })
    }
    res.json({
        messege:"email id not exist"
    })
}
function getUserById(req,res){
    res.json({
        message:"param is recieved",
        data:req.params.id
    })
}

module.exports=userRouter;




