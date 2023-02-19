
import "./styles.css";
import jsonData from "./jsonData"


console.log(jsonData)
/*
fetch("http://data.sportskeeda.com/app-sample/sample.json")
.then((res)=>res.json)
.then((res)=>{
 console.log(res)
})
*/
const myContent = []


jsonData.cards.map(obj=>{
 console.log(obj.ID,"obj")
 myContent.push(`<a class="ancher" href="${obj.permalink}"><div>
 <div>${obj.ID}</div>
 <div><img width="100px" heigth="100px" src="${obj.thumbnail}"</div>
 <div>${obj.title}</div>
 <div>${obj.permalink}</div>
 <div>${obj.published_date}</div>
 </div></br></a>`);
}
)
document.getElementById("app").innerHTML = myContent




Html 

<!DOCTYPE html>
<html>


<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
</head>


<body>
  <div id="app"></div>


  <script src="src/index.js">
  </script>
</body>


</html>


var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

const findPath = (object, path) => {
    
};


console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null


Sunny Code ➖
var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

const findPath = (object, path) => {
    let innerObj =  object;
    let pathNew = path
    let values = pathNew.split(".")
    console.log(values)
    
    for(let i=0;i<values.length;i++){
            
            if(innerObj[i]){
              if(i==values.length-1){
                return innerObj[i]
              }
                innerObj = innerObj[i];
                pathNew = pathNew.substr(i+1)
            }

    }
};


console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null
