const express = require("express") 
const app = express();
console.log("hii")
// app.get("/",(req,res)=>{
//     fetch("https://www.googleapis.com/books/v1/volumes?key=<VALID_API_KEY>&q=something")
//     .then(res=>res.json())
//     .then(data=>{
//         return res.end(JSON.stringify(data))
//     })
//     .catch(error=>{
//         console.log(error)
//     })
// })
app.get("/", (req, res) => {

    console.log("first default get")
})
app.listen(3000, (req, res) => {
    console.log("server started")
})