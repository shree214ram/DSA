//shree Ganeshay namah

function maxPublic(mat,room){
//Li/l * Bi/b 
	return Math.max(
      Math.floor(room[0]/mat[0]) * Math.floor(room[1]/mat[1]) ,
      Math.floor(room[0]/mat[1]) * Math.floor(room[1]/mat[0])
    )
}

const rooms = [[3,4],[3,5],[4,5],[3,7],[4,8]]
const mat =[2,2]
let resultPublic = 0;
const result = []
for(let i=0;i<rooms.length;i++){
	const latest = maxPublic(mat,rooms[i])
    result.push(latest)
    resultPublic+=latest
}
console.log(resultPublic,"resultPublic")
console.log(result,"result")
