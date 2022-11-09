//2:26
const Arr = [2, 3, 1, 2, 4, 3] // output 2
//const Arr = [2, 3, 1,0, 2, 2, 4,2,1] // output 3

let left = 0,
    right = 0,
    shortestLength = Number.MAX_VALUE,
    currentSum = 0,
    Target = 7

while (right < Arr.length) {
    currentSum += Arr[right]

    if (currentSum >= Target) {
        while (currentSum >= Target) {
            currentSum -= Arr[left]
            left++
        }
        shortestLength = Math.min(shortestLength, (right - left + 2))
    }
    right++

}
console.log("shortestLength= ", shortestLength)
