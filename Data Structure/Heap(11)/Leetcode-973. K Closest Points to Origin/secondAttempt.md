/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    /*
        Quick select : Dutch National Flag 3 way distribution , inplace swaping
    */
    //mis0 forget dist function
    while (l <= r) {
        const pivotIndex = Math.floor(Math.random * (r - l + 1)) + l//mis1
        const pivotValue = points[pivotIndex]//mis2
        let lt = l, i = l, gt = r
        while (lt <= gt) {//mis3
            const currentValue=points[i]*points[i]+points[lt]*points[lt] //mis4
            if (currentValue < pivotValue) {
                [points[i], points[lt]] = [points[lt], points[i]]
                i++
                lt++
            } else if (currentValue > pivotValue) {
                [points[i], points[gt]] = [points[gt], points[i]]
                gt--
            } else {
                i++
            }
        }
        //mis5 completely wrong for k-1 we have to check 
        if(i==gt || i==lt){
            return 
        }else if(k-1<lt){
            r=lt-1
        }else{
            l=gt+1
        }
    }
};