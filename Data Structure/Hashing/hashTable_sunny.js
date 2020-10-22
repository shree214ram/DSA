// shree Ganeshaynamah
//******************Hash Table Class*********/
class Hashtable {
    constructor() {
      this.size = 0;
      this.length = 0;
      this.bucket = [];
      this.keys = {};
    }
    append() {
      this.size = 0;
    }
    sizeOfHashTable() {
      return this.size;
    }
    add(key, value = null) {
      this.put(key, value);
    }
    hashFunction(key) {
      return key % this.size;
    }
    contains(key) {
      const index = this.hashFunction(key);
      return this.bucket[index] ? this.bucket[index] : false;
    }
  
    get(key) {
      if (this.contains[key]) {
        for (k in this.contains[key]) {
          console.log('k==', k);
        }
      }
    }
    put(key, value) {
      const index = this.hashFunction(key);
      if (!this.bucket[index]) {
        this.size++;
      }
      this.bucket[index] = { key: value };
    }
    printList() {
      for (let k=0; k< this.bucket.length; k++) {
          for (let key in this.bucket[k]) {
            console.log('key==', key);
            console.log('value==', this.bucket[k][key]);
          }
      }
    }
  }