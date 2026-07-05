/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (root == null) {
        return null
    }
    const fn = (root) => {
        if (root == null) {
            return null
        }
        //Binary Search as BST for searching the Key 
        if (root.val > key) {
            root.left = fn(root.left)
        } else if (root.val < key) {
            root.right = fn(root.right)
        } else {

            //we got key now we will remove the root and arranage BST 

            //if left or right null thn we ca direct set right or left to root because they already BST 
            if (root.left == null) {
                return root.right
            }
            if (root.right == null) {
                return root.left
            }
            //if both childs are there , we will make right Left Most element to root
            let lRoot = root.right
            while (lRoot.left != null) {
                lRoot = lRoot.left
            }
            root.val = lRoot.val
           // lRoot = null //removing the right tree left most element 
        }
        return root
    }
    return fn(root)
};


====

todays tried 
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    //devide and concure , binary search and 
     if(root==null) return root
    const rec=(root)=>{
        if(root==null) return root
        if(root.val>key){
            rec(root.left)
        }else if(root.val<key){
            rec(root.right)
        }else{
            //we got the key
            if(root.right==null){
                /*
                        root
                    left
                */
                root=root.left
            }
            if(root.left==null){
                root=root.left
            }
            if(root.left!=null && root.right!=null){
                /*
                        root
                             right
                            L1    R1
                          L2   
                */
                let min=root.right
                console.log(min,"min")
                while(min.left!=null){
                    min=min.left
                }
                console.log(min,"min after while")
                root.val=min.val
                min=null
                console.log(min,"min after null")
            }
        }
        return root
    }
    return rec(root)
}; 2 test cases passed only small : Input
root =
[5,3,6,2,4,null,7]
key =
3
Stdout
[4] min
[4] min after while
null min after null
Output
[5,4,6,2,4(thi 4 not becoming null even i setuped in code min=null),null,7]
Expected

[5,4,6,2,null,null,7] 
===


**Interviewer:** *"I see exactly why that `4` is refusing to disappear! Setting `min = null` only clears your local pointer variable; it does **not** break the actual physical link inside the tree structure. To delete that successor node, you must explicitly call your delete function on the right subtree to remove it!"*

---

### 🔍 The Core Issues Breakdown

1. **The Reference Trap (`min = null`):** In JavaScript, object assignment copies the *reference*. When you do `min = null`, you are just pointing the variable `min` to nothing. The parent of node `4` still holds its reference via `.left`.
2. **Missing Pointer Reassignments:** When traversing recursively down with `rec(root.left)`, you need to catch the returned modified structure by assigning it: `root.left = rec(root.left)`.
3. **If-Else Cascade Bug:** If `root.right == null` triggers, `root` becomes `root.left`. Then the code immediately checks `if (root.left == null)` using the *newly modified* root, which breaks the logic.

---

### 🛠️ The Clean FAANG Fix

Instead of a separate inner `rec` function, leverage the main function's return values directly to re-link your tree links cleanly:

```javascript
var deleteNode = function(root, key) {
    if (root == null) return null;
    
    // 1. Search phase (re-linking links along the way)
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // 2. Found phase (Handling the 3 deletion cases)
        if (root.left == null) return root.right;  // Case 1 & 2: 0 or 1 child
        if (root.right == null) return root.left;
        
        // Case 3: 2 children (Find minimum node in right subtree)
        let min = root.right;
        while (min.left !== null) {
            min = min.left;
        }
        
        // Swap values
        root.val = min.val;
        
        // CRITICAL: Recursively delete the duplicated value node from the right subtree
        root.right = deleteNode(root.right, min.val);
    }
    return root;
};

```

---

### 🟢 FAANG Feedback Matrix

* **Positives:** Excellent intuitive logic tracking down the **Inorder Successor** (min of right subtree) to handle the complex 2-child scenario!
* **Correction:** Always remember that clearing a reference variable never alters the parent node's pointers—always use recursive deletions or parent pointer tracking to modify a tree's physical shape.




/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    //devide and concure , binary search and 
     if(root==null) return root
    const rec=(root,key)=>{
        if(root==null) return root
        if(root.val>key){
            root.left=rec(root.left,key) //mistake 1 
        }else if(root.val<key){
            root.right=rec(root.right,key) //mistake2 
        }else{
            //we got the key
            if(root.right==null){
                /*
                        root
                    left
                */
                root= root.left 
            }else if(root.left==null){
                root= root.right 
            } else if(root.left!=null && root.right!=null){
                /*
                        root
                             right
                            L1    R1
                          L2   
                */
                let min=root.right
                while(min.left!=null){
                    min=min.left
                }
                root.val=min.val
                root.right = rec(root.right,min.val) //Mistake Most critical bug i forget to remove the duplicate element 
            }
        }
        return root
    }
    return rec(root,key)
};

