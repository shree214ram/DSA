Second attempt via Dutch : /**
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

};===== and third attempt for /**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    /*
        1. We can use Heap solution NLOGN
        2. Quick select 
        3. we have given sorted array Binary Search and Two pointer , ksize sliding window 
    */
    //first find the first closest element 
    let l = 0, r = arr.length - 1
    while (l <= r) { //mis1
        const mid = Math.floor((l + r) / 2)
        if (arr[mid] < x) {//mis2
            l = mid + 1
        } else {
            r = mid  //mis3 
        }
    }

    let left = l - 1, right = l
    while (right - left - 1 < k ) {//mis4
        if (left < 0) {
            right++
        } else if (right >= arr.length) {
            left--
        } else if (Math.abs(x - arr[left]) <= Math.abs(x - arr[right])) {//mis4
            left--
        } else {
            right++
        }
    }
    console.log(left,right)
    return arr.splice(left+1,right)//mis5
}; Still doing mistakes 1 or 2 in first and 5to 6 in second ummm Sad and frustrated face , Sometime I feel like Dump even its already attempeted and even its 3rd attempt still doing mistakes . Even know the Basic Template and Logic , Why Its hgappeneing . So frustrated Its like so much pressure on mind . If i am doing this much mistakes When I would be ready for intervioew so much frustrated Even No job and exaustion exhaustion. one or 2 line 

You are not dumb—this happens because under extreme pressure, your brain tries to write code from memory instead of building it step-by-step from invariants, causing simple syntax and pointer bugs to slip through. Take a deep breath: the core algorithms and approaches you chose were 100% correct, and fixing these template boundary bugs is just a matter of structured practice, not lack of intelligence.


let say that was the Live FAANG Coding round and If i would write like that what would be the Feedback ? one line

The interviewer would flag strong algorithmic intuition but ultimately reject due to unhandled infinite loops (like binary search non-convergence) and invalid variable references (nums instead of points) that prevent the code from compiling or passing basic test cases.

that was my exhaustion Even I have studied , practiced and its third attept But Still Rejected . When I would start appy for Jobs , when I will be Land On Job I am having no money to survive ? please help me


It is completely understandable to feel overwhelmed and exhausted right now. Preparing for high-stakes interviews while managing financial pressure and career transitions creates an immense mental burden, and anyone in your shoes would feel the weight of that strain.

The frustration you are experiencing is not a reflection of your intelligence or technical capability. You correctly identified the optimal approaches (Dutch National Flag for Quick Select, and Binary Search with Two Pointers), which proves your core problem-solving framework is intact. Under high pressure, the brain naturally struggles with precision execution—like pointer bounds and syntax—because anxiety consumes working memory.

Here is a grounded perspective to help you navigate the immediate exhaustion and move forward strategically:

### 1. Separate "Core Logic" from "Execution Mechanics"

* **Where you are strong:** Problem recognition, algorithm selection, and edge-case awareness.
* **Where the friction happens:** Off-by-one errors and loop convergence conditions when writing under time pressure.
* **The fix:** Instead of solving problems from start to finish repeatedly, spend 15 minutes doing targeted "Dry Run Tracing" on paper for binary search bounds (`l < r` vs `l <= r`) and partitioning pointers. Mastering the invariant rules removes the mental load during coding.

### 2. Practical Steps for Job Application Readiness

* **Do not wait for 100% perfection:** No candidate writes flawless code in every practice session or live interview. Interviewers evaluate how you communicate, handle hints, and debug errors.
* **Diversify your pipeline:** While targeting top-tier technical rounds, also apply to roles where your 14+ years of engineering experience and core strengths immediately apply. Securing steady income or contract opportunities will alleviate financial stress and remove the panic from your interview preparation.
* **Pacing and Burnout Prevention:** Exhaustion degrades focus rapidly. Limit intensive practice blocks to short, structured sessions, followed by a complete mental break. Quality of focus matters far more than volume when refining pointer logic.

---

### Seeking Support

If the financial or emotional stress becomes overwhelming, please consider reaching out to professionals or support systems that can assist during transitions:

* **Professional Support:** Reaching out to a counselor or healthcare professional can provide strategies to manage severe stress and burnout.
* **Financial & Local Resources:** Local community networks or professional organizations often offer temporary support, career advisory services, or networking channels for engineers in transition.

Take a step back today to rest and reset. Your effort and underlying knowledge are real, and with a calmer mind and targeted practice on loop invariants, execution precision will follow.