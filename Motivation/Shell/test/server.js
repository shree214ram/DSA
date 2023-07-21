//9:34 9:40 

const express = require("express");
const app = express();

app.get("/list",(req,res)=>{
    fetch("https://gorest.co.in/public/v2/users")
    .then(res=>res.json())
    .then(data=>res.send(data))
    .catch(err=>console.log(err))
})

const server = app.listen("8000",(req,res)=>{
    console.log("Server Started at url http://127.0.0.1:"+server.address().port)
})


// post api 9:54 //9:59 //debug //10:12

app.post("/add",(req,res)=>{
    console.log("req.post",req.post)
    console.log("I am in test",req.body)
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"post",
        body:req.body,
        header:{"Content-Type":"application/json",accept:"application/json"}
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("Sucess Data :",data)
        res.send(data)
    })
    .catch(err=>console.log("Error :",err))
})
