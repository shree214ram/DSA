

HLD 

LLD 

1. Node 
2. Express 
3. get method route app 
4. mysql connection 
5. join query in mysq {product and category }
6. send resp api response in Json fromat 
7. Security , performance , micoservice 


1. Home page screen 
2. componanat serch input box 
3. show the list of all the product {child} 

4. React hooks 
5. useEffect call axio or fetch {promise success/error} 
6. Send to Redux store 
7. Provider store {useSelector , useDispatch}
8. pass data to child 
9. Recat Memo Or pure


const express =  require("express");
const app = express();

app.get("/product",(req,res)=>{

    
    fetch("https://myntra.com/product",{param : req.param})
    .then(res=>res.json())
    .then(data=>res.send(data))
    .catch(err=>console.log(err))
})

const server = app.listen("8000",(req,res)=>{
    console.log("your applicatin is running at http:127.0.0.1:"+server.address().port)
})


--------------------------------

// brand 
// puma 
// category 

 const search (e) =>{
    const serchedValue = e.target.value
    fetch("/product")
 }

 const debounce = function(func, delay){
    let time ;
    return function(...args){
        clearTimeout(time)
        time = setTimeout(()=>func(...args),delay)
    }
 }

 const myInput = document.getElementById("myId")
 myInput.addEventListener("onChange",debounce(()=>{
    console.log("API Called")
 },3000))

 <input id="myId" onChange={e=>search(e)}></>