//12:47 12:53

const express = require("express");
const app = express()
const fetch = require('node-fetch')

app.get("/user", (req, res) => {
    //    fetch("https://restcountries.com/v3.1/all")
    // setTimeout(() => {
    //     console.log("settimpot")
    // }, 10000)
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "GET",
        header: { accept: "application/json", "content-type": "application/json", cookie: "" },
        body: {}
    })
        .then(res => res.json())
        .then(data => { console.log("In promose"); return res.send(data) })
        .catch(error => console.log(error))

    // console.log("checked")
})

app.post("/user", (req, res) => {
    console.log("req", req)
    console.log("Hay", req.body)

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        header: { Accept: "application/json", "Content-Type": "application/json", cookie: "" },
        body: req.body
    })
        .then(res => res.json())
        .then(data => {
            return res.send(data)
        })
        .catch(error => console.log(error))

})

const server = app.listen("3000", (req, res) => {
    const host = "127.0.0.1";
    // const host = server.address().address ;
    const port = server.address().port;
    console.log(`server started at - http://${host}:${port}`)
})


// JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   })