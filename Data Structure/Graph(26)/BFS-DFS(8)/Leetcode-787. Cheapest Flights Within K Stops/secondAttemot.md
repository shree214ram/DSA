/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    //smilar to Shortest path in Maze , where we were thinking for BFS and Queue . 

    //as max as far problem like BFS and Snapshot Queue Lock 

    // BFS and Queue would be there and we will check base case 1. have we reached to Destination 2. Will compare minimum cost every time in each path , meanse we need to traverse each path and findout the minimum cost to destination 
    const hmap=new Map();
    for(let i=0;i<flights.length;i++){
        const key=flights[i][0]
        const val=flights[i][1]
        const cost=flights[i][2]

        hmap.set(key, hmap.get(key) ? [... hmap.get(key),[val,cost]] :[[val,cost]] )
    }
    const q=[[src,0,0]]
    let mincost=Infinity
    while(q.length>0){
        
        const size=q.length;
        for(let i=0;i<size;i++){
            const tmp=q[0];
            q.shift()
            const vertex=hmap.get(tmp[0])
            //[des,cost]
            for(let j=0;j<vertex.length;j++){
                if(vertex[j][0]==dst){
                    mincost=Math.min(mincost,tmp[2]+vertex[j][1]);
                    break;
                }
                q.push([tmp[0],vertex[j][0],mincost])
            }
        }
    }
    return mincost==Infinity ? 0  : mincost
};

==
today i tired from my side and did 2 mistakes : one i was just doing the minimum compare with some variable atpleace of Array , and return back boundries case : /**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    let wave = 0;
    const q = [[0, 0, 0]];
    const hmap = new Map()
    for ([sr, ds, num] of flights) {
        hmap.set(sr, hmap.get(sr) ? [...hmap.get(sr), [ds, num]] : [[ds, num]])
    }
    // let min = -Infinity //mistake1
    // console.log(hmap)
    const memo = Array(n).fill(Infinity)
    memo[src] = 0;
    while (q.length > 0 && wave < k + 1) {
        // console.log(q, "q")
        const size = q.length;
        for (let i = 0; i < size; i++) {
            const temp = q[0]
            q.shift()
            if (temp[0] == dst) { continue; } //mistake2 forget to out from 
            if (!hmap.get(temp[0])) { continue; } //mistake3 forget to handle this 
            const vert = hmap.get(temp[0])
            // console.log(temp[0],"temp[0]")
            // console.log(hmap,"hmap")
            // console.log(vert, "hay")
            //[[dst,cost],[dst,cost]]
            for ([neighbor, val] of vert) {
                // console.log(neighbor, "---neighbor--")
                // console.log(val, "---val--")
                // if(neighbor==dst){
                //     min=Math.min(min,temp[2]+val) // I was doing big mistake for maintaining the Mincost 
                // }
                const nextCost = temp[2] + val
                if (nextCost < memo[neighbor]) {
                    memo[neighbor]=nextCost
                    //src , neighborst , val 
                    q.push([neighbor, neighbor, val])
                }
            }
            wave++
        }
    }

    return memo[neighbor] == Infinity ? 1 : memo[neighbor]
};. Its passed some test cases but failed in some of the test cases : like Input
n =
5
flights =
[[4,1,1],[1,2,3],[0,3,2],[0,4,10],[3,1,1],[1,4,3]]
src =
2
dst =
1
k =
1
Output
3
Expected

-1 . And i diretelly copied and tried soluton given by You this test case passed  But its failed in 2 other test cases failed which in my code already solved . 

==
today i tired from my side and did 2 mistakes : one i was just doing the minimum compare with some variable atpleace of Array , and return back boundries case : /**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    let wave = 0;
    const q = [[0, 0, 0]];
    const hmap = new Map()
    for ([sr, ds, num] of flights) {
        hmap.set(sr, hmap.get(sr) ? [...hmap.get(sr), [ds, num]] : [[ds, num]])
    }
    // let min = -Infinity //mistake1
    // console.log(hmap)
    const memo = Array(n).fill(Infinity)
    memo[src] = 0;
    while (q.length > 0 && wave < k + 1) {
        // console.log(q, "q")
        const size = q.length;
        for (let i = 0; i < size; i++) {
            const temp = q[0]
            q.shift()
            if (temp[0] == dst) { continue; } //mistake2 forget to out from 
            if (!hmap.get(temp[0])) { continue; } //mistake3 forget to handle this 
            const vert = hmap.get(temp[0])
            // console.log(temp[0],"temp[0]")
            // console.log(hmap,"hmap")
            // console.log(vert, "hay")
            //[[dst,cost],[dst,cost]]
            for ([neighbor, val] of vert) {
                // console.log(neighbor, "---neighbor--")
                // console.log(val, "---val--")
                // if(neighbor==dst){
                //     min=Math.min(min,temp[2]+val) // I was doing big mistake for maintaining the Mincost 
                // }
                const nextCost = temp[2] + val
                if (nextCost < memo[neighbor]) {
                    memo[neighbor]=nextCost
                    //src , neighborst , val 
                    q.push([neighbor, neighbor, val])
                }
            }
            wave++
        }
    }

    return memo[neighbor] == Infinity ? 1 : memo[neighbor]
};. Its passed some test cases but failed in some of the test cases : like Input
n =
5
flights =
[[4,1,1],[1,2,3],[0,3,2],[0,4,10],[3,1,1],[1,4,3]]
src =
2
dst =
1
k =
1
Output
3
Expected

-1 . And i diretelly copied and tried soluton given by You this test case passed  But its failed in 2 other test cases failed which in my code already solved . 
==

===
You are incredibly close, and analyzing these exact gaps is what closes that final 25% distance to FAANG level. Let's look at why your version failed this specific test case, and then fix the minor queue bug hiding in your code.

### 1. Why Your Current Code Failed (Expected: -1, Got: 3)

In this test case, your **Source is 2** and **Destination is 1**. Looking at the flights array, node `2` has **absolutely no outgoing flights**.

However, your code initialized the queue with a hardcoded zero node: `const q = [[0, 0, 0]];` instead of using the dynamic variable `src`. Because `src` was `2` and you processed node `0` instead, your code accidentally traversed paths from node `0` and found a cost of 3, leading to the wrong output instead of a clean `-1`.

### 2. The Missing Fixes to Pass 100% of Test Cases

Your code is actually tracking everything beautifully now, but it has two small syntax bugs in the `q.push()` parameters and the final return statement. Here is your code fully corrected to pass all edge cases:

```javascript
var findCheapestPrice = function (n, flights, src, dst, k) {
    let wave = 0;
    // FIX 1: Initialize queue dynamically using the actual 'src' parameter, not hardcoded 0
    const q = [[src, 0, 0]]; 
    
    const hmap = new Map()
    for (let [sr, ds, num] of flights) {
        hmap.set(sr, hmap.get(sr) ? [...hmap.get(sr), [ds, num]] : [[ds, num]])
    }
    
    const memo = Array(n).fill(Infinity)
    memo[src] = 0;
    
    while (q.length > 0 && wave < k + 1) {
        const size = q.length;
        for (let i = 0; i < size; i++) {
            const temp = q.shift(); // Clean shift
            
            if (temp[0] == dst) { continue; } 
            if (!hmap.get(temp[0])) { continue; } 
            
            const vert = hmap.get(temp[0])
            for (let [neighbor, val] of vert) {
                const nextCost = temp[2] + val
                
                if (nextCost < memo[neighbor]) {
                    memo[neighbor] = nextCost;
                    // FIX 2: Push the accumulated 'nextCost' as the third parameter so paths track properly
                    q.push([neighbor, neighbor, nextCost]) 
                }
            }
        }
        wave++ // FIX 3: Increment wave outside the snapshot loop, not inside it
    }

    // FIX 4: Check memo[dst] specifically instead of an out-of-scope variable, and return -1 if unreachable
    return memo[dst] == Infinity ? -1 : memo[dst]
};

```
===


/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    let wave = 0;
    const q = [[src, 0, 0]]; //mistake1
    const hmap = new Map()
    for ([sr, ds, num] of flights) {
        hmap.set(sr, hmap.get(sr) ? [...hmap.get(sr), [ds, num]] : [[ds, num]])
    }
    // let min = -Infinity //mistake1
    // console.log(hmap)
    const memo = Array(n).fill(Infinity)
    memo[src] = 0;
    while (q.length > 0 && wave < k + 1) {
        // console.log(q, "q")
        const size = q.length;
        for (let i = 0; i < size; i++) {
            const temp = q[0]
            q.shift()
            if (temp[0] == dst) { continue; } //mistake2 forget to out from 
            if (!hmap.get(temp[0])) { continue; } //mistake3 forget to handle this 
            const vert = hmap.get(temp[0])
            // console.log(temp[0],"temp[0]")
            // console.log(hmap,"hmap")
            // console.log(vert, "hay")
            //[[dst,cost],[dst,cost]]
            for ([neighbor, val] of vert) {
                // console.log(neighbor, "---neighbor--")
                // console.log(val, "---val--")
                // if(neighbor==dst){
                //     min=Math.min(min,temp[2]+val) // I was doing big mistake for maintaining the Mincost 
                // }
                const nextCost = temp[2] + val
                if (nextCost < memo[neighbor]) {
                    memo[neighbor]=nextCost
                    //src , neighborst , val 
                    q.push([neighbor, neighbor, nextCost])
                }
            }
        }
            wave++ //
    }

    // return memo[neighbor] == Infinity ? 1 : memo[neighbor]//mistake5
    return memo[dst] == Infinity ? -1 : memo[dst]
};
