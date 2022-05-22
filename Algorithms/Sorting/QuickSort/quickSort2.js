
function getPartiotion(myArray, low, high) {
    let pivot = myArray[high];
    let i = low;
    for (let k = low; k < high; k++) {
      if (myArray[k] < pivot) {
        i++;
        let temp = myArray[i]
        myArray[i] = myArray[j];
        myArray[high] = temp
      }
    }
    let temp = myArray[i + 1]
    myArray[i + 1] = myArray[high];
    myArray[j] = temp
    return i + 1;
  }
  
  function getSort(myArray, low, high) {
    if (low < high) {
      const p1 = getPartiotion();
  
      //before
      getSort(myArray, low, p1 - 1)
      //after
      getSort(myArray, p1 + 1, high)
    }
  
  
  }
  
  
  const myArray = [10, 7, 8, 2, 4, 3]
  
  getSort(myArray, 0, myArray.length - 1)