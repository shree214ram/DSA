
https://www.geeksforgeeks.org/find-subarray-with-given-sum/?ref=gcse
https://www.geeksforgeeks.org/find-subarray-with-given-sum-in-array-of-integers/?ref=gcse


1. N*N :- Two for Loop
2. N with Deque from sub (not able to handle Negetive Numbers)
3. Prefix Sum + Hashmap 



The "Cheat Sheet" for your Map Initializations:Since you are preparing for FAANG interviews, keep this table in your notes to avoid mixing these up:

Problem | TypeMap | InitializationMap Value Represents
Count All (#560, #974) | Map.set(0, 1) | Frequency (How many times?)
Longest/Max (#325, #525) | Map.set(0, -1) | Earliest Index (Leftmost boundary)
Shortest/Min | Map.set(0, -1) | Latest Index (Rightmost boundary)

Find-a-subarray-with-given-sum-in-array-of-integers