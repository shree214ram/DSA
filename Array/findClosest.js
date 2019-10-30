function findCloser(arr, low, high, pick) {
  if (arr[high] <= pick) {
    return high
  }
  if (arr[low] >= pick) {
    return low
  }
  const mid = (low + high) / 2;
  if (arr[mid] <= pick && arr[mid + 1] > pick)
    return mid;

  /* If x is greater than arr[mid],  
     then either arr[mid + 1] is  
     ceiling of x or ceiling lies  
     in arr[mid+1...high] */
  if (arr[mid] < pick)
    return findCloser(arr, mid + 1,
      $high, pick);

  return findCloser(arr, low,
    mid - 1, pick);

}

function findClosest(arr, pick, howMany) {
  const $l = findCloser(arr, 0, arr.length - 1, pick);

  // Right index to search 
  const $r = $l + 1;

  // To keep track of count of 
  // elements already printed 
  const $count = 0;

  // If x is present in arr[],  
  // then reduce left index 
  // Assumption: all elements  
  // in arr[] are distinct 
  if (arr[$l] == pick) $l--;

  // Compare elements on left  
  // and right of crossover 
  // point to find the k  
  // closest elements 
  while ($l >= 0 && $r < $n &&
    $count < $k) {
    if (pick - arr[$l] < arr[$r] - pick)
      console.log(arr[$l--] + " ");
    else
      console.log(arr[$r++] + " ");
    $count++;
  }

  // If there are no more 
  // elements on right side, 
  // then print left elements 
  while ($count < $k && $l >= 0)
    console.log(arr[$l--] + " ");
  $count++;

  // If there are no more  
  // elements on left side,  
  // then print right elements 
  while ($count < $k && $r < $n)
    console.log(arr[$r++]);
  $count++;

}

const arr = [12, 16, 22, 30, 35, 39, 42, 
                45, 48, 50, 53, 55, 56];
const howMany = 4;
findClosest(arr, 35, howMany);