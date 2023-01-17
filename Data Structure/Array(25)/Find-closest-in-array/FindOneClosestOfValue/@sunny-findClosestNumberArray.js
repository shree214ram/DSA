function findCloser(Arr, target) {
  //corner cases
  if (Arr[0] >= target) {
    return Arr[0]
  } else if (Arr[Arr.length - 1] <= target) {
    return Arr[Arr.length - 1]
  }
  //mid
  let i = 0
  let j = Arr.length - 1
  let mid = 0
  while (i < j) {
    let mid = (i + j) / 2
    if (Arr[mid] === target) {
      return Arr[mid]
    }
    //left
    if (Arr[mid] > target) {
      if (mid > 0 && Arr[mid - 1] < target) {
        return findClosest(Arr[mid - 1], Arr[mid], target)
      }
      j = mid;
    } else {
      if (mid < Arr.length - 1 && Arr[mid + 1] > target) {
        return findClosest(Arr[mid], Arr[mid + 1], target)
      }
      i = mid + 1;
    }
  }
  return Arr[mid]
}

function findClosest(A, B, target) {
  return A - target < target - B ? A : B
}
const Arr = [11, 12, 14, 15, 16, 16, 18, 19];

const target = 20;
const res = findCloser(Arr, target)
console.log(res, "Result")