/* This function returns median 
    of ar1[] and ar2[]. 
    Assumptions in this function: 
        Both ar1[] and ar2[] are 
        sorted arrays 
        Both have n elements */

function getMedian( a, b, startA, startB, endA, endB) {
    if (endA - startA == 1) {
        return (
            Math.max(a[startA],
                b[startB])
            + Math.min(a[endA], b[endB]))
            / 2;
    }
    /* get the median of 
the first array */
    m1 = median(a, startA, endA);

    /* get the median of 
the second array */
    m2 = median(b, startB, endB);

    /* If medians are equal then 
return either m1 or m2 */
    if (m1 == m2) {
        return m1;
    }

    /* if m1 < m2 then median must 
exist in ar1[m1....] and 
            ar2[....m2] */
    else if (m1 < m2) {
        return getMedian(
            a, b, (endA + startA + 1) / 2,
            startB, endA,
            (endB + startB + 1) / 2);
    }

    /* if m1 > m2 then median must 
exist in ar1[....m1] and 
ar2[m2...] */
    else {
        return getMedian(
            a, b, startA,
            (endB + startB + 1) / 2,
            (endA + startA + 1) / 2, endB);
    }
}

/* Function to get median 
of a sorted array */
function median( arr, start, end) {
    n = end - start + 1;
    if (n % 2 == 0) {
        return (
            arr[start + (n / 2)]
            + arr[start + (n / 2 - 1)])
            / 2;
    }
    else {
        return arr[start + n / 2];
    }
}

// Driver code 

ar1 = [1, 2, 3, 6];
ar2 = [4, 6, 8, 10];
n1 = ar1.length;
n2 = ar2.length;
if (n1 != n2) {
    console.log(
        "Doesn't work for arrays "
        + "of unequal size");
}
else if (n1 == 0) {
    console.log("Arrays are empty.");
}
else if (n1 == 1) {
    console.log((ar1[0] + ar2[0]) / 2);
}
else {
    console.log(
        "Median is "
        + getMedian(
            ar1, ar2, 0, 0,
            ar1.length - 1, ar2.length - 1));
} 