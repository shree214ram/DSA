const Arr = [[4,5,3],[2,3,2],[3,6,2],[1,5,4],[2,4,1],[1,2,2]];
//l,w,h
const DP = new Array(Arr.length).fill(0)
for(let i=1;i<Arr.length;i++){
    DP[i] = Arr[i][2]
}
for(let i=1;i<Arr.length;i++){
    for(let j=0;j<i;j++){
        if(
            ((Arr[i][0]>Arr[j][0] && Arr[i][1]>Arr[j][1]) || 
        (Arr[i][0]<Arr[j][0] && Arr[i][1]<Arr[j][1])) &&
        Arr[i][2]+DP[j] > DP[i]
        ){
            DP[i] = Arr[i][2]+DP[j]
        }
    }
}
let max = 0
for(let i=1;i<Arr.length;i++){
    max = Math.max(max,DP[i])
}
//tried but not working code because there is no rotation code available 