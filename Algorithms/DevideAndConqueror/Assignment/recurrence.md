
### (a) T(n) = 2T(n/3) + 1

T(n)=aT(n/b)+n to the power c
where a=1, b=3/2, and c=0
. Then
logba=log321=0=c,

so

T(n)∈Θ(logn).

In particular, using your reference, k=0
 works, as n0log0n=1
 and
1∈Θ(n0log0n).


### (b) T(n) = 7T(n/7) + n.
    The correct answer is option 3.
    Explanation:
    Recurrence relation:T(n) = 7T(n/7) + n
    Comparing with T(n) = aT(n/b) + θ(n to the power k * logpn)
    a = 7, b = 7, k = 1, p = 0
    Using Master's Theorem,
    Sincea = b to the power k and p > -1,
    T(n) = O(nlog(n))

### C) T(n) = T(n − 1) + 2
    Concept:
    Recurrence Relation:
    A recurrence relation relates the nth term of a sequence to its predecessors. These relations are related to recursive algorithms.
    Definition:
    A recurrence relation for a sequence a0, a1, a2,.... is a formula (equation) that relates each term anto certain of its predecessorsa0, a1, a2,...., an-1. The initial conditions for such a recurrence relation specify the values ofa0, a1, a2,...., an-1. For example, the recursive formula for the sequence 3, 8, 13, 18, 23 is
    a1= 3, an= an-1+ 1,2≤n∞
    Calculation:
    Given:
    The recurrence relation , T(n) = T(n - 1)+ 2
    If n = 1 then T(n) = T(n-1)+ 2 =T(1) = T(1-1)+ 2 = T(0) + 2 =5 + 2 = 7 // Value of T(0) given in Question
    If n= 2 then T(n) = T(n-1)+ 2 =T(1) = T(2-1)+ 2 = T(1) + 2 =7 + 2 = 9 // Value of T(1) is 7
    If n= 3 then T(n) = T(n-1)+ 2 =T(1) = T(3-1)+ 2 = T(2) + 2 =9 + 2 = 11 // Value of T(2) is 9
    Therefore, above pattern can be written in the form of
    T(n) = 2n+ 5
    If n= 1 thenT(n) = 2n+ 5 =T(1) = 2(1)+ 5 =T(1) =7