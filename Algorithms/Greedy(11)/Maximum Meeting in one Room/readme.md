### Maximim Meeting is same like Maximum Activity Selection 
1. sort via ending time .
2. result = [], push first(0th index) Meeting ditectelly 
3. for loop start from 1 , 0index we have already Added 
    1. if(current.startTime>old.endTime){
        push in result
    }

Leetcde 252 Meeting Room 
Leetcode 253 Meeting Room 2 
Leetcode 2402 Meeting Room 3 



Since these problems are often locked behind a subscription, I've outlined the official LeetCode descriptions, examples, and constraints for you to work on locally.

The solution I gave you for `findPlatform` is the exact logic required for **LeetCode 253 (Meeting Rooms II)**.

---

## LeetCode 253: Meeting Rooms II (Medium)
**Problem:** Given an array of meeting time intervals `intervals` where `intervals[i] = [starti, endi]`, return the minimum number of conference rooms required. (This is the "Railway Platform" equivalent).

*   **Example 1:**
    *   **Input:** `intervals = [[0,30],[5,10],[15,20]]`
    *   **Output:** `2`
*   **Example 2:**
    *   **Input:** `intervals = [[7,10],[2,4]]`
    *   **Output:** `1`
*   **Constraints:**
    *   $1 \le intervals.length \le 10^4$
    *   $0 \le start_i < end_i \le 10^6$



---

## LeetCode 2402: Meeting Rooms III (Hard)
**Problem:** You are given an integer `n`. There are `n` rooms numbered from `0` to `n - 1`. You are given a 2D integer array `meetings` where `meetings[i] = [starti, endi]`. 
1. When a meeting starts, it is assigned to the **lowest-numbered** available room.
2. If no rooms are free, the meeting is delayed until the earliest room becomes free. The duration remains the same.
3. If multiple rooms become free at the same time, the meeting goes to the one with the lowest number.
**Return the number of the room that held the most meetings.** If there is a tie, return the lowest room number.

*   **Example 1:**
    *   **Input:** `n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]`
    *   **Output:** `0`
    *   **Explanation:** 
        *   At time 0, meeting [0,10] takes room 0.
        *   At time 1, meeting [1,5] takes room 1.
        *   At time 2, meeting [2,7] is delayed because no rooms are free.
        *   At time 5, room 1 becomes free. Meeting [2,7] starts at time 5 and ends at time 10 ($5 + (7-2)$).
*   **Example 2:**
    *   **Input:** `n = 3, meetings = [[1,20],[2,10],[3,5],[4,9],[6,8]]`
    *   **Output:** `1`
*   **Constraints:**
    *   $1 \le n \le 100$
    *   $1 \le meetings.length \le 10^5$
    *   $meetings[i].length == 2$
    *   $0 \le start_i < end_i \le 5 \cdot 10^5$
    *   All $start_i$ are **distinct**.

---

### Staff Engineer Insight for Room III:
While Room I and II are solved with **Sorting + Two Pointers/Min-Heaps**, Room III is a **Double Priority Queue** problem. 
*   One Min-Heap to track **Available Rooms** (sorted by room number).
*   One Min-Heap to track **Ongoing Meetings** (sorted by end time, then room number).

Since you are preparing for Staff levels, getting comfortable with **Priority Queues (Heaps)** in Java or JavaScript is your next major architectural step. 

Which one are you going to code first?