/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    const map = new Map()
    for (const word of words) {
        map.set(word, (map.get(word) || 0) + 1)
    }
    // console.log(map) //{sunny:2,is:3}
    const hp = new MinPriorityQueue(point => point["val"])
    for (const [key, val] of map.entries()) {
        hp.enqueue({ key, val })
        if (hp.size() > k) {
            hp.dequeue()
        }
    }
    console.log(hp)
    return hp.toArray().map(obj=>obj.key)
};