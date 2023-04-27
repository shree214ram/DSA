# Broute force Solution {using two for loop} {O(n*n)}:-
    const target = 12;
    const A = [ [ 1, 2, 3, 4 ],
                [ 5, 6, 7, 8 ],
                [ 9, 10, 11, 12 ] 
            ]
    for(let i=0;i<A.length;i++){
        for(let j=0;j<A[i].length;j++){
            if(A[i][j]==target){
                console.log(`Target found at row ${i} and column ${j} `)
            }
        }   
    }

# Navie Solution {using Binary Search} {O(n)}:-
    let row = 0;
    let colmn = A[row].length-1;
    let height = row*colmn-1
    while(row<A.length && colmn >=0){
        if(A[row][colmn] == target){
                console.log(`Target found at row ${row} and column ${colmn} `)
                return 
        }
        if(A[row][colmn] < target){
                row++
        }else{
            colmn--
        }
    }

# Optimal Solution {using Binary Search with convert 2D Array in 1D} {O(logM*N)}:-
    let row = A.length;
    let colmn = A[0].length;
    let height = row*colmn-1;
    let left = 0;
    while(left<=height){
        const mid = Math.round((l+r)/2)

        let tC = mid % colmn;
        let tR = Math.floor(mid / colmn);
        let val = arr[tR][tC];

        if (val == target){
            return [ tR, tC ];
        }
    
        if (val < target){
            left = mid + 1;
        }
        else{
            height = mid - 1;
        }
    }