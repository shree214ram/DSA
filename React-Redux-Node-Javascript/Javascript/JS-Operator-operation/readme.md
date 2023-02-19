https://stackoverflow.com/questions/37998264/what-does-it-mean-for-an-array-to-have-incremented-element-in-square-brackets


a[k] takes the kth element of the array a.

k++ increases the value of k, but returns the previous value.

Thus, a[k++] returns a[k] with the side-effect of increasing k after returning the value of a[k]. a[k++] = 4 is equivalent to:

a[k] = 4
k = k + 1
On the other hand, ++k would increase k before returning it, so a[++k] = 4 would be

k = k + 1
a[k] = 4

# Note :- A[++k] pahle increement karega fir latest incremented index ki value print karega ,A[k++] pahle A[k]value print karega fir increement karega   ,  