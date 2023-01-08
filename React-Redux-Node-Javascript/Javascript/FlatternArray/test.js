function flatten(arr) {
    let flattenArr = [];
    arr.forEach(el => {
        if (Array.isArray(el)) {
            const result = flatten(el);
            result.forEach(el => flattenArr.push(el));
        } else {
            flattenArr.push(el);
        }
    });
    return flattenArr;
}

const input = [1, 2, 3, [4, 5, [6, 7]], 8, [9, [10, 11]]];
const output = flatten(input);

console.log(output);