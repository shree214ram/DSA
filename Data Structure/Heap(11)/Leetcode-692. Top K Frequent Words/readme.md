just  a small hint no code no solution : /**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    const map = new Map()
    for (const word of words) {
        map.set(word, (map.get(word) || 0) + 1)
    }
    console.log(map) //{sunny:2,is:3}
    const hp = new MinPriorityQueue(point => point["val"])
    for (const [key, val] of map.entries()) {
        hp.enqueue({ key, val })
        if (hp.size() > k) {
            hp.dequeue()
        }
    }
    console.log(hp)
    return hp.toArray().map(obj=>obj.key)
}; ? one line 


Since the problem requires lexicographical ordering for tied frequencies, your custom heap comparator needs to handle both frequency and string comparison—e.g., higher frequency comes first, but if frequencies match, alphabetical order determines priority!


but the code and Min heap selection is correct right , I only need to add laxical order also with frequency test right ? one line

Yes, your MinPriorityQueue logic and size-K heap approach are spot on; you just need to update the priority function or custom comparator to handle frequency ties lexicographically!

please let me know what to change here ? one line


For `@datastructures-js/priority-queue` v6+, pass a custom `compare` function into `PriorityQueue` (or `MinPriorityQueue`) that sorts lower frequency first, and for equal frequencies, sorts lexicographically backwards (e.g., `'b'` before `'a'`) so the smallest frequency or largest alphabetical word gets evicted first!


Here is the corrected code using `PriorityQueue` with a custom comparator that correctly handles both frequency and lexicographical tie-breaking:

```javascript
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = new Map();
    for (const word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    // Custom comparator for MinPriorityQueue:
    // Evicts the "least valuable" element when size > k:
    // 1. Lower frequency gets evicted first.
    // 2. If frequencies are equal, lexicographically larger word gets evicted first (so "i" stays over "love").
    const minPQ = new PriorityQueue({
        compare: (a, b) => {
            if (a.val !== b.val) {
                return a.val - b.val; // Primary: lowest frequency on top
            }
            return b.key.localeCompare(a.key); // Secondary: reverse alphabetical on top
        }
    });

    for (const [key, val] of map.entries()) {
        minPQ.enqueue({ key, val });
        if (minPQ.size() > k) {
            minPQ.dequeue();
        }
    }

    const result = [];
    while (minPQ.size() > 0) {
        result.push(minPQ.dequeue().key);
    }

    // Reverse since min-heap pops elements in ascending order of importance
    return result.reverse();
};

```