https://www.geeksforgeeks.org/sum-of-leaf-nodes-at-each-horizontal-level-in-a-binary-tree/

Solution : Queue and Hash map
1. Traverse DFS via queue 
2. check at every level if any leaf node is there then 
    add in hashmap {level:value} if first time and 
    if same level per koi new elements is coming so 
    set {level:get(level)+1} 