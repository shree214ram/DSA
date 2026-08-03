<script>
/*
Here is the classic **Count All Palindromic Subsequences** problem with constraints and a 15-minute timer to simulate your interview round.

---

### Count All Palindromic Subsequences

Given a string $S$, find the total number of palindromic subsequences (need not be distinct) that can be formed from it. Since the answer can be large, return the output modulo $10^9 + 7$.

#### **Example 1**

```text
Input:  S = "abcd"
Output: 4
Explanation: Palindromic subsequences are "a", "b", "c", "d".

```

#### **Example 2**

```text
Input:  S = "aab"
Output: 4
Explanation: Palindromic subsequences are "a", "a", "b", "aa".

```

#### **Constraints**

* $1 \le \vert{}S\vert{} \le 1000$
* $S$ consists only of lowercase English letters.
* **Time Limit:** 1.0 sec
* **Space Limit:** $O(N^2)$ or $O(N)$

---

⏱️ **Recommended Time Limit:** **15 minutes**

*(When you're ready, reply with your solution or ask for a hint if you get stuck on the inclusion-exclusion math!)*
*/

/*
		a	a	b
        
    a   1   2   2
    
    a       1
    
    b   		1
    
*/

const s="aab" //answer coming 4
//const s="abcd" //answer coming 4

const DP=Array.from({length:s.length},()=>Array(s.length).fill(0))
let count=0
for(let i=0;i<s.length;i++){
	DP[i][i]=1
}

for(let gap=2;gap<=s.length;gap++){
	for(let i=0;i<=s.length-gap;i++){
		let j=i+gap-1
        if(s[i]==s[j]){
        	
            	DP[i][j]=1+DP[i][j-1]+DP[i+1][j] // corners matched an the check inner 
           
        }else{
        	DP[i][j]=DP[i+1][j]+DP[i][j-1]-DP[i+1][j-1]
            //corner doesnt matched 
            // a    a    a
            //  (1-2)+(0-1)-1-1
        }

	}
}
console.log(DP[0][DP.length-1],"Answer")
</script>