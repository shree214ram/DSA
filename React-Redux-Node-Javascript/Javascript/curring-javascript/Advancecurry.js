const curry = (fn) => {
    return curried = (...args) => {
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
