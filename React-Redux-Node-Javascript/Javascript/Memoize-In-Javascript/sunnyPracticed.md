<script>
const add = (val) =>{
    return val+ 10
}

const generate = (fn) =>{
    let cashe = {}
    return function (...args){
        if(args[0] in cashe){
            return cashe[args[0]]
        }else {
            const res = fn(args[0])
            cashe[args[0]] = res
            return res
        }
    }
} 

const memoize = generate(add)
console.log(memoize(2))
