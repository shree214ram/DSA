
function mostContainWater(A) {
  let l = 0
  let r = A.length - 1;
  let MaxWater = Number.MIN_VALUE
  while (l < r) {
    MaxWater = Math.max(MaxWater, (r - l) * Math.min(A[l], A[r]))
    if (A[l] < A[r]) {
      l++
    }
    else {
      r--
    }
  }
  console.log("MaxWater=", MaxWater)
}
//const A = [ 1, 5, 4, 3 ] //output 6
const A = [3, 1, 2, 4, 5] //output 12
mostContainWater(A)


