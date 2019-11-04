const arr = [4, 2, 1, 0, 5, 4, 3, 5, 0];
for (let i = 0; i < arr.length; i++) {
  arr[arr[i] % 10] = arr[arr[i] % 10] + 10;
}
const final = []
for (let k = 0; k < arr.length; k++) {
  if (arr[k] > 19) {
    final.push(k);
  }
}
console.log("The repeating elements are : "+ final + " ");