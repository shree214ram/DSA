class Hash {
    constructor() { 
        this.size = 0;
        this.keys = {}
        this.bucket = []
    }
    hasingFunc(key) {
        return key % 43;
    }
    add(key, value) {
        const index = this.hasingFunc(key)
        if (this.bucket[index]) {
            this.bucket[index] = { key: value }
        } else {
            this.bucket[index] = { key: value }
            this.keys[key] = key
            this.size++
        }
    }
    container(key) {
        const index = this.hasingFunc(key)
        if (this.bucket[index]) {
            return true
        }
        return false
    }
}

const myArray = [1, 4, 45, 6, 10, 8];
const sum = 22; 

for (let i=0;i<myArray.length-2;i++){
    const hashObj = new Hash();
    const first = myArray[i]
    for (let j=i+1;j<myArray.length;j++){
        const second = myArray[j];
        const temp = sum - first - second;
        if( hashObj.container(temp) ){
            console.log("Tripplate sum values are =>", first, second, temp );
            break;
        } else {
            hashObj.add(myArray[j])
        }
    }
}
//It takes o(n2) time compaxity and o(n) extra space for Hash, whole array needs  to be traversed 2 times but it simpler than Two pointer  . 