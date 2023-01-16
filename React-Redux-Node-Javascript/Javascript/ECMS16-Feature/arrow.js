class Arrow {
    constructor(name) {
        this.name = name
        this.bind.printNameFun = this.printNameFun()
    }
    printNameArrow() {
        setTimeout(() => {
            console.log("Arr=>", this.name)
        })
    }
    printNameFun() {
        setTimeout(function () {
            console.log("normal=", this.name)
        })
    }
}
const ar = new Arrow("sunny")
ar.printNameArrow() //this will print sunny 
ar.printNameFun() //this will not print sunny 