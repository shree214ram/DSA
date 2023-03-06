# https://leetcode.com/problems/lru-cache/

# https://www.geeksforgeeks.org/lru-cache-implementation/

https://www.youtube.com/watch?v=akFRa58Svug
https://www.youtube.com/watch?v=Hi5obC_CwIU
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
