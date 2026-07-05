https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/

https://www.youtube.com/watch?v=TO5zsKtc1Ic
Tech Dose 

### Approach :-  
    1. left and right ka jo max he usme yadi root ko add kare , yadi ye addition root se bada hoga to ye lenge other wise root ko lenge or niche wale childs ko chod denge (ms)
    CASE 1 :- ms = max(max(left,rigt)+root.data, root.data)
    2. Or yadi hum root khud ko lekar Add kare and sath me niche wale childs (ms)
    CASE 2 :- ms1 = max(ms, left+rigt+root.data)
    3. final result
    CASE 3 :- finalResult = max(ms1, finalResult)

https://leetcode.com/problems/binary-tree-maximum-path-sum/

https://www.geeksforgeeks.org/minimum-sum-path-between-two-leaves-of-a-binary-tree/

https://www.geeksforgeeks.org/shortest-root-to-leaf-path-sum-equal-to-a-given-number/

https://www.youtube.com/watch?v=6cA_NDtpyz8