<!DOCTYPE html>
<html>

<body>

  <h2>JavaScript const</h2>

  <p id="demo"></p>

  <script>
    //11:23 //11:27 //11:28
    /*const A = [1,2,[3,[4,5,6,[7,[8,[9,[10]]]]]]];
    const result = rec(A);
    console.log(result);
    function rec(A){
      let res = []
      for(let value of A){
      if(Array.isArray(value)){
          const newArr = rec(value);
            res = [...res,...newArr]
        }else{
          res.push(value)
        }
      }
      return res
    }*/
    //11;31 //11:35
    const obj1 = {
      a:
      {
        b:
        {
          c:
            { d: 1 }
        }
      },
      d:
      {
        e:
        {
          f: 8
        }
      },
      g: 9
    };
    /*
    output :-
    {
        "d": 1,
        "f": 8,
        "g": 9
    }
    */
    const obj = {
      "isbn": "123-456-789",
      "author": {
        "lastnameAuthor": "Doe",
        "firstnameAuthor": "Jane"
      },
      "editor": {
        "lastnameEditor": "Smith",
        "firstnameEditor": "Jane"
      },
      "title": "The Ultimate Database Study Guide",
      "category": {
        "production": "abc",
        "editor": {
          "lastnameEditorInside": "Smith",
          "firstnameEditorInside": "Jane"
        },
      }
    }
    /*
    output :- 
    {
    "isbn": "123-456-789",
    "lastnameAuthor": "Doe",
    "firstnameAuthor": "Jane",
    "lastnameEditor": "Smith",
    "firstnameEditor": "Jane",
    "title": "The Ultimate Database Study Guide",
    "production": "abc",
    "lastnameEditorInside": "Smith",
    "firstnameEditorInside": "Jane"
}
    */
    console.log(rec(obj))
    function rec(obj) {
      let newObj = {}
      for (let key in obj) {
        if (typeof obj[key] === "object") {
            //recursion
          const recursive = rec(obj[key])
          newObj = { ...newObj, ...recursive }
        } else {
            //calculation
          newObj[key] = obj[key]
        }
      }
      //base case
      return newObj;
    }
  </script>

</body>

</html>