/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    /*
        K closest means we can work wim Max Heap but it may take NlogN 
        We can solve with Quick select with Doutch National Flag for O(N)
    */

    if (points.length == 1) {
        return points[0]
    }
    let l = 0, r = points.length - 1
    while (l <= r) {
        const index = Math.floor(Math.random() * (r - l + 1)) + l
        const pivot = points[index][0] * points[index][0] + points[index][1] * points[index][1]
        let lt = l, i = l, gt = r
        // 3 pointer nutch algo
        while (i <= r) {//mis1 <=gt
            const current = points[i][0] * points[i][0] + points[i][1] * points[i][1]
            if (current < pivot) {
                swap(i, lt)
                i++
                lt++
            } else if (current > pivot) {
                swap(i, gt)
                gt--
            } else {
                i++
            }
        }
        //fully wrong we should focus at k-1 and 
        if (i >= lt && i <= gt) {
            return nums.slice(lt,gt)// Actually in First blog already closest point arranged so we can direct take slice 0,k element 
        }else if(i>lt){
            l=lt+1
        }else{
            r=gt-1
        }
    }

};