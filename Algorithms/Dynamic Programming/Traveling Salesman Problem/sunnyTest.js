<script>
Arr=[[1,4,20],[1,2,10],[1,3,15],[2,1,10],[2,4,25],[2,3,35],[3,4,30],[3,2,35],[3,1,15],[4,1,20],[4,2,25],[4,3,30]]
const cities = [1,2,3,4]
const Matrix = new Array(cities.length+1).fill(null)

for(let i=1;i<Matrix.length;i++){
    Matrix[i] = new Array(Matrix.length+1).fill(null)
    
}

for(let i=0;i<Arr.length;i++){
    //Matrix[i] = new Array(Matrix.length).fill(null)
    const current = Arr[i]
    console.log(current,"current")
    Matrix[current[0]][current[1]] = current[2]
}
console.log(Matrix,"Matrix")
let minCost = Number.MAX_VALUE
//const res= solve(Arr,1,minCost)
//console.log("Minimumcost is= ",res)


function solve(Arr,start,destination){

    for(let i=0;i<cities.length;i++){

    }
    return Math.min(Arr,)
}

  /*
    
                        1

        2               3               4

    3       4     2        4

    4       3     4        2

    1       1     1        1


  */



</script>
