//9:57
function printSpiral(myArray, rowLenght, colLength) {
  var startRowIndex = 0;
  var accessCol = colLength - 1;
  var startColIndex = 0;
  var accessRow = rowLenght - 1;
  while (startColIndex < colLength && startRowIndex < rowLenght) {
    console.log('shree')
    for (var i = startColIndex; i <= accessCol; i++) {
      console.log(myArray[startRowIndex][i]);
    }
    console.log('brak1')
    startRowIndex += 1;
    for (var k = startRowIndex; k < rowLenght; k++) {
      if (myArray[k] && myArray[k][accessCol]) {
        console.log(myArray[k][accessCol]);
      }
    }
    accessCol -= 1;
    console.log('brak2')

    if (startRowIndex < rowLenght) {
      for (var i = accessCol; i >= startColIndex; i--) {
        console.log(myArray[rowLenght - 1][i]);
      }
    }
    console.log('brak3')

    rowLenght -= 1;
    accessRow -= 1;
    if (startColIndex < colLength) {
      for (var k = accessRow; k >= startRowIndex; k--) {
        // console.log('klll')
        if (myArray[k] && myArray[k][startColIndex]) {
          console.log(myArray[k][startColIndex]);
        }
      }
      startColIndex += 1;
    }
  }
}

var myArray = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
];
var rowLenght = 3;
var colLength = 5;
printSpiral(myArray, rowLenght, colLength);