// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'.env'
})
connectDB()

/*
IIFE (immedeaily inbvoke funtion exectuion )for function immediate execution  ()() we use semi-colon just for cleaning purpose to editor does not confuse
import express from "express"
;(async ()=>{
    try{
       await  mongoose.connect(`${process.env.MONGODB_URI}/$`)
       app.on("error",(error)=>{
        throw error;
       })
       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
       })
    }
    catch(error){
        console.log("ERROR",error)
        throw error
    }
})()
*/