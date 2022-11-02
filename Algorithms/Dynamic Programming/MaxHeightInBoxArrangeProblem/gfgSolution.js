/* Dynamic Programming implementation
of Box Stacking problem in Javascript*/


/* Representation of a box */
class Box {

    // h --> height, w --> width,
    // d --> depth
    // h, w, d, area;

    // for simplicity of solution,
    // always keep w <= d

    /*Constructor to initialise object*/
    constructor(h, w, d) {
        this.h = h;
        this.w = w;
        this.d = d;
        this.area = 0;
    }

    /*To sort the box array on the basis
    of area in decreasing order of area */
    compareTo(o) {
        return o.area - this.area;
    }
}

/* Returns the height of the tallest
stack that can be formed with give
type of boxes */
function maxStackHeight(arr, n) {

    const rot = new Array(n * 3);

    /* New Array of boxes is created -
    considering all 3 possible rotations,
    with width always greater than equal
    to width */
    for (let i = 0; i < n; i++) {
        const box = arr[i];

        /* Original Box*/
        rot[3 * i] = new Box(box.h, Math.max(box.w, box.d),
            Math.min(box.w, box.d));

        /* First rotation of box*/
        rot[3 * i + 1] = new Box(box.w, Math.max(box.h, box.d),
            Math.min(box.h, box.d));

        /* Second rotation of box*/
        rot[3 * i + 2] = new Box(box.d, Math.max(box.w, box.h),
            Math.min(box.w, box.h));
    }

    /* Calculating base area of
    each of the boxes.*/
    for (let i = 0; i < rot.length; i++)
        rot[i].area = rot[i].w * rot[i].d;

    /* Sorting the Boxes on the bases
    of Area in non Increasing order.*/
    rot.sort((a, b) => b.area - a.area);

    const count = 3 * n;

    /* Initialize msh values for all
    indexes
    msh[i] --> Maximum possible Stack Height
            with box i on top */

    // Same Like Longest common subsequence 
    const msh = [];
    for (let i = 0; i < count; i++)
        msh[i] = rot[i].h;

    /* Computing optimized msh[]
    values in bottom up manner */
    for (let i = 0; i < count; i++) {
        msh[i] = 0;
        const box = rot[i];
        let val = 0;

        for (let j = 0; j < i; j++) {
            const prevBox = rot[j];
            if (box.w < prevBox.w && box.d < prevBox.d) {
                val = Math.max(val, msh[j]);
            }
        }
        msh[i] = val + box.h;
    }

    let max = -1;

    /* Pick maximum of all msh values */
    for (let i = 0; i < count; i++) {
        max = Math.max(max, msh[i]);
    }

    return max;
}

/* Driver program to test above function */
/*const defArr = [[4,5,3],[2,3,2],[3,6,2],[1,5,4],[2,4,1],[1,2,2]]
const  arr = new Array();
for(let i=0;i<defArr.length;i++){
    arr.push(new Box(defArr[i][0], defArr[i][1], defArr[i][2]))
}*/

const defArr = [[4, 6, 7], [1, 2, 3], [4, 5, 6], [10, 12, 32]]
const arr = new Array();
for (let i = 0; i < defArr.length; i++) {
    arr.push(new Box(defArr[i][0], defArr[i][1], defArr[i][2]))
}

console.log(arr, "arr")
console.log("The maximum possible " + "height of stack is " + maxStackHeight(arr, defArr.length));

// This code is contributed by Divyam
