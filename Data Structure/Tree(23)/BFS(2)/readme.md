# Breadth First Search (Level order traversing ):-
https://www.geeksforgeeks.org/level-order-tree-traversal/

https://www.youtube.com/watch?v=6ZnyEApgFYg 
Binary Tree Level Order Traversal - BFS - Leetcode 102

## There are 2 way to print BFS Level order traversing 
### Using 2 Functions  O(n^2)
    1. Print Level Order {
        1. Find the height of tree let say 5 
        2. for(i=0;i<heightOfTree) loop 0 to till height of tree {
            call Print Current Level Order function 
        }
    }
    2. Print Current Level Order (){
        if(root == null) return
        else if(level ==1){
            console.log(root.data)
        } else if(level>1){
            this.PrintCurrentLevel(root.left,level-1)
            this.PrintCurrentLevel(root.right,level-1)
        }
    }
    

### Using queue O(n)
    1. Create an empty queue 
    2. push root to queue if not null
    3. while(q.length !== 0){
        const temp = q.shift
        console.log(temp.data)
        if(temp.left){
            q.push(temp.left)
        }
        if(temp.right){
            q.push(temp.right)
        }
    }
