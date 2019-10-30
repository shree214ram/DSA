function squareRoot(goal, k, m) {
  const mid = (k + m) / 2;
  if (mid * mid === goal) {
    return mid;
  } else if (mid * mid < goal) {
    squareRoot(goal, mid, m)
  } else {
    squareRoot(goal, k, mid)
  }
}

function findSqaureRoot(goal) {
  let found = false;
  let k = 1;
  while (!found) {
    if (k * k === goal) {
      console.log("The Sqaure Root Of " + goal + " Is =" + k);
      found = true
    } else if (k * k > goal) {
      console.log("The Sqaure Root Of " + goal + " Is lies in between=" + k + " and  " + (k - 1));
      squareRoot(goal, k, k - 1);
      found = true
    }
    k++;
  }
}
findSqaureRoot(625);    