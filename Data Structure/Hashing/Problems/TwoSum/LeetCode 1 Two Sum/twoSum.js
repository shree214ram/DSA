class Hash {

    constructor(){
        this.keys={}
        this.size = 0;
        this.bucket = []
    }
    hashFunc(key){
        return key % 43 ; 
    }
    add(key,value=null){
        const index = this.hashFunc(key);
        if(this.bucket[index]){
            this.bucket[index][key]= value;
        } else {
            this.bucket[index] = {key: value }
            this.size++
        }
    }
    contains(key){
        const index = this.hashFunc(key);
        if(this.bucket[index]){
            return true
        } 
        return false;
    }
    remove (){

    }

}

const myArray = [0, -1, 2, -3, 1]
const targetSum = -3;

const hashOnj = new Hash();
for (let k=0; k<myArray.length; k++){
    let temp = targetSum - myArray[k]
    if(hashOnj.contains(temp)){
        console.log("Target sum parts are ", temp ,",", myArray[k])
    } else {
        hashOnj.add(myArray[k])
    }
}
