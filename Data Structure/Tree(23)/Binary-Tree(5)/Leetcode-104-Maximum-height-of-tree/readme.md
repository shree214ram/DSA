I did L 104 in jst 5 min with all test cases pass : /**

 * Definition for a binary tree node.

 * function TreeNode(val, left, right) {

 *     this.val = (val===undefined ? 0 : val)

 *     this.left = (left===undefined ? null : left)

 *     this.right = (right===undefined ? null : right)

 * }

 */

/**

 * @param {TreeNode} root

 * @return {number}

 */

var maxDepth = function(root) {

    //we need to find the max height 



    const height=(node)=>{

        if(node==null) return 0

        return Math.max(height(node.left),height(node.right))+1

    }

    return height(root)

}; But i have one question , In FAANG Real interview as some thime they want at white board so at that time they would give the Root same like above 2 Problem Or I would need to add and write the custom class of Binary Tree and then focus at Main Function ? Because in above 2 Problem I just Focused at Main Function without write the Class of Tree like Insertion or other inner function ? 