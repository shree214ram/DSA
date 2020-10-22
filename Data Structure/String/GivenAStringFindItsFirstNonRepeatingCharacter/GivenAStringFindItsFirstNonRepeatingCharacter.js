class HashTable {
    constructor() {
        this.maxSize = 43;
        this.size = 0;
        this.keys = [];
        this.bucket = [];
    }
    set(key, value = null) {
        this.put(key, value)
    }
    put(key, value = null) {
        const index = this.hashFunc(key)
        if (!this.bucket[index]) {
            this.bucket[index] = {}
            this.size++
        }
        this.bucket[index] = { key: value }
    }
    isEmpty() {
        return this.size == 0
    }
    get(key) {
        const index = this.hashFunc(key)
        if (this.bucket[index]) {
            return this.bucket[index]
        }
        return false;
    }
    size() {
        return this.size
    }
    bucket() {
        return this.bucket
    }
    hashFunc(key) {
        return key % this.maxSize;
    }
}


const str = "geeksforgeeks";
const hash = new HashTable();

for (let i = 0; i < str.length; i++) {
    if (hash.get(str[i].charAt)) {
        const value = hash.get(str[i].charAt).value + 1;
        hash.set(str[i].charAt, value)
    } else {
        hash.set(str[i].charAt, 1)
    }
}

for (let i = 0; i < hash.bucket.length; i++) {
    if (hash.bucket[i].value==1) {
        console.log("First Non repeating character is ", hash.bucket[i].key)
    } 
}