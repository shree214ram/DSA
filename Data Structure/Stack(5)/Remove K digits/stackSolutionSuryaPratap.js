//7:46 7:56
class stack {
    constructor() {
        this.data = []
        this.size = 0
    }
    add(value) {
        this.data.push(value)
    }
    removeTop() {
        this.data.pop()
    }
    pickTop() {
        return this.data[this.data.length - 1]
    }
}

//let A1 = "1432219", k = 3
//Output: "1219"

//let A1 = "28179441", k = 3
//output = "1,7,4,4,1"

let A1 = "1230987", k = 2
//Output: "10987"

const A = A1.split("")
const st = new stack()
for (let i = 0; i < A.length; i++) {
    let pick = st.pickTop()
    while (pick > A[i] && k > 0) {
        st.removeTop();
        k--
        pick = st.pickTop()
    }
    st.add(A[i])
}
console.log(st.data, "Result")
