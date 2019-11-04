class HashTable {

    constructor(size = 42) {
      this.buckets = new Array(size)
      this.size = size
      this.keys = {};
    }
  
  
    hash(key) {
      return key.toString().length % this.size;
    }
  
  
    set(key, value) {
      let index = this.hash(key);
      this.keys[key] = index;
      if (!this.buckets[index]) {
        this.buckets[index] = [];
      }
      this.buckets[index].push([key, value])
      return index
    }
  
    get(key) {
      let index = this.hash(key);
      if (!this.buckets[index]) return null
      for (let bucket of this.buckets[index]) {
        console.log(bucket, 'bucket')
        // key
        if (bucket[0] === key) {
          //value
          return bucket[1]
        }
      }
  
  
    }
    printList() {
      const keys = this.keys;
      // for (let bucket of this.buckets[index]) {
      //   console.log(bucket, 'bucket')
      //   // key
      //   if (bucket[0] === key) {
      //     //value
      //     return bucket[1]
      //   }
      // }
      for (var prop in keys) {
          // skip loop if the property is from prototype
          if (!keys.hasOwnProperty(prop)) continue;
          // your code
          console.log(prop + " = " + keys[prop]);
      }
    }
    printKeys() {
      const keys = this.keys;
      console.log(keys, 'keys');
    }
  }
  
  const hasht = new HashTable(10);
  
  hasht.set("userId3", "pop")
  hasht.set("userId4", "king")
  hasht.set("userId9", "april")
  hasht.set("userId50", "gowtham")
  hasht.set("userId100", "olo")
  
  console.log(hasht.get("userId3"));
  console.log(hasht.printKeys());
  console.log(hasht.printList());
  