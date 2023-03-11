//10:02 //10;10 //10:11

class ck {
    constructor(n) {
        this.q = [];
        this.hash = new Set();
        this.size = n
    }
    add(val) {
        if (!this.hash.has(val)) {
            if (this.q.length == this.size) {
                const rear = this.q[this.q.length - 1];
                this.q.pop();
                this.hash.delete(rear)
            }
        } else {
            //if exist then remove
            this.q.splice(this.q.indexOf(val), 1);
        }
        this.q.unshift(val);
        this.hash.add(val, 0)
    }
}
const c = new ck(3)
c.add(1);
c.add(2);
c.add(3);
c.add(4); //432
c.add(1); //143

console.log(c.q)