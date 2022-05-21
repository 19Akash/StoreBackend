require('dotenv').config();
const express =require('express');
const app = express();
const cors=require("cors");
const connection = require("./db.js")
var bodyParser  = require('body-parser');
const authRouter=require('./routes/auth')
const userRouter=require('./routes/userRoutes')
//const {User,validate}=require('./models/user')
const mongoose = require('mongoose');


//connection to DB
connection();

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    reEnterPassword:{
        type:String,
        required:true
    }

});
const User = mongoose.model("user",userSchema);





//middlewar
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

//routes

// app.post('/login',(req,res)=>{
//     console.log(req.data);
//     res.send({
//         body:"hello"
//     });
// })
app.post('/register',async (req,res)=>{
    console.log(req.body);
    // try {
    //     const emailExits = await User.findOne({ email: req.body.email });
    //     if(emailExits) return res.status(400).send({
    //         data:res.body,
    //         message:'Email already exits'   
    //     });
    //  }
    //  catch(err)
    //  {
    //     console.log(err);
    //  }
    //    if(user)
    //    {
    //        return res.status(409).send({message: "User is already exist with this account"})
    //    }
    await new User({...req.body}).save();
    res.status(201).send({message:"User created successfully"});
    // res.send({
    //     body:"hello"
    // });
})
//app.use("/register",userRouter);
//app.use("/login",authRouter);

const port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`server is listening at ${port}`)
})







// const express=require('express');
// const app = express();
// app.listen(3001);

// app.get('/',(req,res)=>{

//     res.send("Hello get request");
// });