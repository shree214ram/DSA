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
            this.keys.push(key)
        }
        this.bucket[index] = { key: key, value: value }
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
    containsKey(key){
        return this.keys.includes(key)
    }
    size() {
        return this.size
    }
    bucketResult() {
        return this.bucket
    }
    hashFunc(key) {
        return key % this.maxSize;
    }
}


const str = "geeksforgeeks";
console.log('Input String is => ',str)

const hash = new HashTable();

const k = 97;
  const charObject = {};
  for (let i = 0; i < 26; i++) {
    const currentObject = String.fromCharCode(k + i);
    charObject[currentObject] = k + i;
  }

for (let i = 0; i < str.length; i++) {
    const currentKey= charObject[str[i]]
    if (hash.containsKey(currentKey)) {
        const value = hash.get(currentKey).value + 1;
        hash.set(currentKey, value)
    } else {
        hash.set(currentKey, 1)
    }
}
const hashBucket = hash.bucketResult();
for (let i = 0; i < hashBucket.length; i++) {
    if (hashBucket[i] && hashBucket[i].value==1) {
        for (var prop in charObject) {
            if (charObject[prop] == hashBucket[i].key) {
                // your code
                console.log("First Non repeating character is ", prop);
                break;
            }
        }
    } 
}
