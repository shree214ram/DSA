# https://leetcode.com/problems/lru-cache/

# https://www.geeksforgeeks.org/lru-cache-implementation/

1. Approach :- using Array but serching N and sifting N will take Q(N+N)
2. Approach :- using Linklist but serching N and sifting O(1) will take Q(N+N)
3. Approach :- using HashMap but serching O(1) and sifting O(1) will take Q(N+N)
https://www.youtube.com/watch?v=akFRa58Svug&ab_channel=TECHDOSE this is bext explanation 

1. LRU Means Least Recent used chache 
2. main chiz ye he ki hame given lenth ka container chache banana hota he jisme 
	1. yadi vo banda already exist he hash map me to usko move karna hota he last
	2. yadi vo banda already exist nahi he to hash map
		1. yadi container full filledup he to remove Rear And add at Front
		2. And add at Front
	3. add in hash map for 

see sunnyTest.js 

<script>
// JS code to implement the approach
class LRUCache {
constructor(n) {
	this.csize = n;
	this.dq = [];
	this.ma = new Map();
}

refer(x) {
	if (!this.ma.has(x)) {
        if (this.dq.length === this.csize) {
            const last = this.dq[this.dq.length - 1];
            this.dq.pop();
            this.ma.delete(last);
        }
	} else {
	    this.dq.splice(this.dq.indexOf(x), 1);
	}

	this.dq.unshift(x);
	this.ma.set(x, 0);
}

display() {
	console.log(this.dq);
}
}

const cache = new LRUCache(4);

cache.refer(1);
cache.refer(2);
cache.refer(3);
cache.refer(1);
cache.refer(4);
cache.refer(5);
cache.display();

// This code is contributed by phasing17

</script>

Different Problem :- 
Leet Code 146 https://leetcode.com/problems/lru-cache/ 
https://www.youtube.com/watch?v=Hi5obC_CwIU
