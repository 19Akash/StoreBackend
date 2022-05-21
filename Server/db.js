require('dotenv').config();
const mongoose = require('mongoose');

module.exports = ()=>{
    const connectionParam ={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    mongoose.connect(process.env.DB,connectionParam)
    .then((db)=>{
       console.log("db conected")
    })
    .catch((err)=>{
        console.log(err)
    })
}
