<script>
    

    // curring 

   
function add(a){
        return function(b){
            if(b){
                return add(a+b)
            }else {
                return a
            }
        }
    }
     console.log(add(6)(7)(10)(10)())

    // curring Advance 
    const addFn  (fn){
        return cur(...args){
            if(args.length !== fn.length){
                return cur.bind(null,...args)//1,2
            }else{
                const res = fn(...args)
                return res;
            }
        }
    }
    const add ((x,y,z)=>x+y+z);
    
    const addMemoize = addFn(add);
    console.log(addMemoize(10)(20)(30))


</script>