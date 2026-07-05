/**

 * @param {number[]} score

 * @return {string[]}

 */

var findRelativeRanks = function(score) {

    //[10,3,8,9,4]

    const B= [...score];

    const A= score.sort((a,b)=>b-a)

    // console.log(A,B)

    //[ 10, 9, 8, 4, 3 ]

    const val={}

    const cup=["Gold Medal","Silver Medal","Bronze Medal"]

    for(let i=0;i<A.length;i++){

        const re=cup[i] ? cup[i] : (i+1).toString()

        val[A[i]]= re

    }

    // console.log(val,"val")

    const res=[]

     for(let i=0;i<B.length;i++){

        // console.log(i,"i");

        // console.log(B[i],"score[i]")

        // console.log(val[B[i]],"val[B[i]]")

        res.push(val[B[i]])

    }

    return res;

}; taken 5 min extra and one or 2 hint but its worked , what would be the FAANG Feedbacl ? one line 

**Interviewer:** *"You pivoted seamlessly and demonstrated excellent debugging agility by correcting the reference mutation, earning a **Pass/Hire**—just be mindful that in a real FAANG interview, mutating the input array `score` via `score.sort()` is a minor red flag, so always sort your copy `B` instead of the original!"*



what wuld be the optimised solution because its took 190 ms ? 


To optimize this from $O(N \log N)$ to **linear time $O(N)$**, you can use a **Bucket Sort / Counting Array** approach because the scores are unique integers. Instead of sorting, we find the maximum score, create an array of that size where the index represents the score and the value stores the original athlete's index, and then traverse it backward to assign ranks!

Here is the highly optimized $O(N)$ solution that will slash your runtime:

```javascript
var findRelativeRanks = function(score) {
    const n = score.length;
    let maxScore = 0;
    for (let i = 0; i < n; i++) {
        if (score[i] > maxScore) maxScore = score[i];
    }

    // Bucket array: index is the score, value is the original athlete's index + 1
    const bucket = new Array(maxScore + 1).fill(0);
    for (let i = 0; i < n; i++) {
        bucket[score[i]] = i + 1; 
    }

    const res = new Array(n);
    let rank = 1;
    const cups = ["Gold Medal", "Silver Medal", "Bronze Medal"];

    // Scan backwards from the highest possible score bucket
    for (let s = maxScore; s >= 0; s--) {
        if (bucket[s] > 0) {
            const originalIndex = bucket[s] - 1;
            res[originalIndex] = rank <= 3 ? cups[rank - 1] : rank.toString();
            rank++;
            if (rank > n) break; // Optimization: stop early once all athletes are ranked
        }
    }
    return res;
};

```

### 📊 Time & Space Complexity

* **Time Complexity:** $\mathcal{O}(N + M)$ where $N$ is the number of athletes and $M$ is the maximum score value—this completely bypasses the $\mathcal{O}(N \log N)$ sorting bottleneck!
* **Space Complexity:** $\mathcal{O}(M)$ to maintain the bucket array tracker.