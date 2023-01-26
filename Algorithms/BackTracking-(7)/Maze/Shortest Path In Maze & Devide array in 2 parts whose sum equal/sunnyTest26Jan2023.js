
//9:21
//9:41
//maze 

const waysX = [0,0,-1,1]
const waysY = [1,-1,0,0]

function isCheck(x,y,M){
	//valid && not visited then mark as visited 
	//@mistake 1 0 ko bhi handle karna chahiye x>=0 && y>=0
    if(x< M.length && M[x] && y< M[0].length && M[x][y] && M[x][y] == -1){
    	//M[x][y] == 1
    }
    
}

function solve(M,x,y){
	//base case 
    if(x*y == M.length* M[0].length){
    	return 
    }
    for(let i=0;i<M.length;i++){
    	    for(let j=0;j<M[0].length;j++){

    	    // recursion 
			if(isCheck(M,i,j)){
            	M[i][j] == 1
            }
			//backtracking
            else {
            	M[i][j] == 1

            }
		}	
    }
}


let mat = [
	[ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 ],
	[ 1, 0, 1, 0, 1, 1, 1, 0, 1, 1 ],
	[ 1, 1, 1, 0, 1, 1, 0, 1, 0, 1 ],
	[ 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ],
	[ 1, 1, 1, 0, 1, 1, 1, 0, 1, 0 ],
	[ 1, 0, 1, 1, 1, 1, 0, 1, 0, 0 ],
	[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
	[ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 ],
	[ 1, 1, 0, 0, 0, 0, 1, 0, 0, 1 ]
];

let src = new Pair(0, 0);
let dest = new Pair(3, 4);


