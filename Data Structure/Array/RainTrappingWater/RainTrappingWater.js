const myArray = [3,0,0,2,0, 4 ]

leftMax = 0
rightMax = 0

for(let i=1; i< myArray.length; i++) {
    leftMax = max(leftMax,myArray[i])
}
currentBlock = myArray[i]
min(leftMax,rightMax) - currentBlock