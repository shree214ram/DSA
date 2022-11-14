//Program for rotate N X N Metrics in (90 Degree) Anticlock wise 
var N = 4;

function rotateMatrix(mat_array) {
  var statrRowIndex = 0,
    startColIndex = 0;
  for (var statrRowIndex = 0; statrRowIndex < N / 2; statrRowIndex++) {
    //  console.log()
    for (var startColIndex = statrRowIndex; startColIndex < N - statrRowIndex - 1; startColIndex++) {
      // console.log(mat_array[statrRowIndex][startColIndex],'t')
      var temp = mat_array[statrRowIndex][startColIndex];

      // move values from 
      // right to top 
      mat_array[statrRowIndex][startColIndex] = mat_array[startColIndex][N - 1 - statrRowIndex];

      // move values from 
      // bottom to right 
      mat_array[startColIndex][N - 1 - statrRowIndex] = mat_array[N - 1 - statrRowIndex][N - 1 - startColIndex];

      // move values from  
      // left to bottom 
      mat_array[N - 1 - statrRowIndex][N - 1 - startColIndex] = mat_array[N - 1 - startColIndex][statrRowIndex];

      // assign temp to left 
      mat_array[N - 1 - startColIndex][statrRowIndex] = temp;

    }
  }
}

function displayMatrix(mat_array) {
  var statrRowIndex = 0,
    startColIndex = 0;
  for (var i = 0; i <= N - 1; i++) {
    for (var k = 0; k <= N - 1; k++) {
      console.log(mat_array[i][k])
    }
  }
}
mat_array = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]];

rotateMatrix(mat_array);

// Print rotated matrix 
displayMatrix(mat_array);

// input is :-
// 1   2   3    4
// 5   6   7    8 
// 9   10  11   12 
// 13  14  15   16