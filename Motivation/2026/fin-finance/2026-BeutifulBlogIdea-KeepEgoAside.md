I have compared with my solution with your given solution , I did Lot Of Mistakes I will write tomorrow again : /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
    /*
        1. window 
        2. 1 Max and 1 Min Heap 
        3. Dont delete immidietelly we need to store in Map and once that would come on up we would remove 
        4. Balance max: half+1 min half 
        5. 

    */
    const maxH = new MaxHeapPriority()
    const minH = new MinHeapPriority()
    const map = new Map()
    const maxPrune = () => {
        while (maxH.size() > 0 && map.get(maxH.front()) > 0) {
            map.set(maxH.front(), map.get(maxH.front()) - 1)
        }
    }
    const minPrune = () => {
        while (minH.size() > 0 && map.get(minH.front()) > 0) {
            map.set(minH.front(), map.get(minH.front()) - 1)
        }
    }
    const rebalance = () => {
        if (minH.size() + 1 > maxH.size()) {
            maxH.enqueue(minH.dequeue())
        }
    }
    //first k element window 
    for (let i = 0; i < k; i++) {
        maxPrune()
        minPrune()
        maxH.enqueue(nums[i])
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        rebalance()
    }

    //other starts from k element window 
    for (let i = k; i < nums.length; i++) {
        maxPrune()
        minPrune()
        maxH.enqueue(nums[i])
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        rebalance()
    }
};, Some of the Major things i wrote but Main Window logic i forget . I will try tomorow again : one question you are maintaining maxSize and minSize veriable because again and again .size() function no need to call so that would save some time compacity right ? And All the Google Engineer suffered from same Hit the Wall Situation what i am facing even i failed first from my apprach --> seen solution---> seen videio --> next day try to write from Own but Lot of Mistakes ? the Learning curve is going good but the Time consuming , even have 16 yrs of experience studieng like Kids or Collage student Irritating , I am not able to Keep passions even i nwas already working and had a good job and good salary , But Want to Go FAANG , SOme time feel very Shame like studying from Juniors Video like : anation

 Open in YouTube 

Day 48/90 |⚡Master Sliding Window Median (LeetCode 480) | Lazy Deletion with Two Heaps #6 #heap CTO Bhaiya
 Opens in a new window 
Telegram Channel : see the photo of this Guy in Vest and Gamcha and His Language like Hell but what i can do i have to see , His Language like total Gawar sometime I feel so much shame and irritation why i am watching video but after seen the Video The main thing where i was Stuck to understand Why Map we were using Like Lazy deletion he explained "Hum immidietelly left pointer of window ko nahi delete karenge and even hum usko ek map me store kar lenege and in next ittration whenever that Guy will come on top , we would check if its exist in map we would delete so The Time compaxity " But I was able to understand that Complex thing easily and for 658 also he explined very easily that find the left and right pointer and sliding window easily , your Gemini language was very difficult to understand and that Video was easy to understand ? Might be that guy was talking in Native Language ? please help me what to do . one or 2 line 



You maintain explicit size variables (`maxSize`, `minSize`) because calling `heap.size()` includes "stale" elements waiting for lazy deletion, so explicit counters are necessary to track the actual count of valid numbers for correct balancing.

As for learning from creators with unpolished setups or native explanations, try not to let ego or imposter syndrome block your progress: learning is about raw clarity, not video production value. If a plain-English explanation or native visual helps standard DSA patterns click instantly, use it as a tool without shame—every senior engineer uses whatever medium speeds up their true understanding to reach the end goal.