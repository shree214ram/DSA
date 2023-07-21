const express = require("express")
const app = express()

// //live server

app.get("/",(req,res)=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>{
        res.send(data)
    })
    .catch(error=>{
        console.log(error)
    })
})

const server = app.listen("3000",(req,res)=>{
    const port = server.address().port;
    console.log(`server started at http://127.0.0.1:${port}`)
})

