// const http =require( "http");
// const fs = require("fs")
// http.createServer((req,res)=>{
//     console.log("server started")
//     fs.readFile('test.txt',(err,data)=>{
//         // console.log(err,"err")
//         // res.end()
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         console.log(data,"data")
//         return res.end();
//     })
// }).listen(8000)


const express = require("express")
const app = express()
const fetch = require('node-fetch')
const fs = require("fs")

app.get("/", (req, res) => {

    console.log("first default get")
})

app.get("/user", (req, res) => {
    //res.end({"user":"sunny"})
    console.log("List user get")
})

app.get('/listUsers', function (req, res) {
    // fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    //    console.log( data );
    //    const data = {
    //     "user1" : {
    //        "name" : "mahesh",
    //        "password" : "password1",
    //        "profession" : "teacher",
    //        "id": 1
    //     },

    //     "user2" : {
    //        "name" : "suresh",
    //        "password" : "password2",
    //        "profession" : "librarian",
    //        "id": 2
    //     },

    //     "user3" : {
    //        "name" : "ramesh",
    //        "password" : "password3",
    //        "profession" : "clerk",
    //        "id": 3
    //     }
    //  } 
    //    res.end( JSON.stringify(data));
    // });

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => {
            res.end(JSON.stringify(data))
        })
        .catch((err) => console.log("error he"))


    // const method = 'GET'
    // const url = 'https://jsonplaceholder.typicode.com/posts/1'
    // const headers = {
    //     'X-API-KEY': 'E6xwOg2BY4RbmiJogfyegrt746r7te',
    //     'Content-Type': 'application/json'
    // }

    // // exports.submit = async function(req, res) {
    // const body = JSON.stringify({ foo: 'bar' }) // your json data here
    // const json = fetch(url, { body, method, headers })
    //     .then(res => res.json())
    //     .then((data) => {
    //         res.setHeader('Content-Type', 'application/json')
    //         res.end(JSON.stringify(data))
    //     })
    // console.log(json) // use it somehow 
    // // res.end(json)
    // // }

})

app.listen(8000, (req, res) => {
    console.log("server started")
})