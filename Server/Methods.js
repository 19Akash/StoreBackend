
const express=require("express");
const app =express();
const connection = require('./db')
const userRouter=require('./routes/userRoutes');
const authRouter=require('./routes/auth')
let cors = require('cors');



app.use(cors());
app.use(express.json());
app.listen(1000,()=>{
    console.log("server is listining at 1000");
})
connection();


let users=[
    {
        'id':1,
        'name':"Akash"
    },
    {
        'id':2,
        'name':"Vikash"
    },
    {
        'id':3,
        'name':"Harshit"
    },
    {
        'id':4,
        'name':"Kajal"
    }
]
     
app.use('/users',userRouter);
app.use('/auth',authRouter);








