const express=require('express')
require('./conn')
const app=express();
const port=process.env.port||8000;
app.get("/",(req,res)=>{
    res.send("welcome to first page");
})
app.listen(port,()=>{
    console.log(`listening to port no ${port}`);
})