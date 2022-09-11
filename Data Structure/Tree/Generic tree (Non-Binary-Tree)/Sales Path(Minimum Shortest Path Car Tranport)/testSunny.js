class Node {
	constructor(val,childs){
    	this.value=val
    	this.child=childs
    }
}

class Node1 {
	constructor(val,childs){
    	this.value=val
    	this.child=childs
    }
}
//7:36


//12:10
let G = [
{val:`0_-1`,childs:[5,3,6],parent:`-1`},
{val:`5_0`,childs:[4],parent:`0_-1`},
{val:`3_0`,childs:[2,0],parent:`0_-1`},
{val:`6_0`,childs:[1,5],parent:`0_-1`},
{val:`4_5`,childs:[],parent:`5_0`},
{val:`2_3`,childs:[1],parent:`3_0`},
{val:`0_3`,childs:[10],parent:`3_0`},
{val:`1_6`,childs:[],parent:`6_0`},
{val:`5_6`,childs:[],parent:`6_0`},

{val:`1_2`,childs:[1],parent:`2_3`},
{val:`10_0`,childs:[],parent:`0_3`},
{val:`1_1`,childs:[],parent:`1_2`},
]
const GP = []
for(let i=0;i<G.length;i++){
	GP.push(new Node())
}