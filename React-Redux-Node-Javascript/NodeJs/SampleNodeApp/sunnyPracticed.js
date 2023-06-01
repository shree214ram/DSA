const express = require("express")
const fs = require("fs")
const app = express()

app.get((req,res)=>{
    fs.readFile("path",(err,data)=>{
        if(err){
            res.writeHead(400,{"Content-Type":"text/html"})
        }else{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(data.toString())
        }
    })
    res.send("")
})

const server = app.listen("8000",()=>{
    const host = server.address().address
    const port = server.address().port

    console.log(`Server is working at http://${host}:${port}`)
})