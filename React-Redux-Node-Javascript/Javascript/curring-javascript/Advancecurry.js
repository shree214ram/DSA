const curry = (fn) => {
    return curried = (...args) => {
        /*Agar inner function curried ke argument ki length Jab tak Main Fn ke argument tak nahi 
        pahuch jati Recursively Bind karte jao Jab tak ki Equal na ho jaye fir Main Function ko in the last call karo
        for example 
        fn argument are 3 

        and inner function curried is 0 then Bind in the same function 10
        and inner function curried is 1 then Bind in the same function 10,20
        and inner function curried is 2 then Bind in the same function 10,20,30

        then call fn in last
        */
        if (fn.length !== args.length) {
            return curried.bind(null, ...args)
        }
        return fn(...args);
    };
} 
const totalNum = (x, y, z) => {
    return x + y + z
}
const curriedTotal = curry(totalNum);
console.log(curriedTotal(10)(20)(30));
