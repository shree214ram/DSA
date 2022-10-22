https://www.youtube.com/watch?v=ceGBg3g18js

Convert Normal BST into a Balanced BST | Binary Search Tree | Love Babbar DSA Sheet | Amazon 🔥

https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/

Steps :-
### Important Note :- Below tree is a BST but not Balanced BST 
1. we will write a recursive function that will folow below steps :-
    a. find middle value (start index+end index)/2 (Min) 
    b. set a new node (newNode) via this Min index = InOrderArry[min]
    c. recursively call for left and right findout and then return final result node 
    d. In simple language if u will see below tree Yadi hum bich wale element ko khich kar middle ke niche wale elements ko Left and Upper wale elements ko Right Tree bana de And Yahi process Recursively other elements ke liye bhinkar de to ye Balanced BST ban jayegi 
``` Constructed skewed binary tree is
				10
				/
				8
			/
			7
			/
			6
		/
		5 
        ```
1. Store Inorder , start = 0 , end= length of InorderArray
2. call convertBalancedBST(InorderArray,root, start, end)
3. convertBalancedBST(InorderArray,root, start, end){
    if(start>end) return
    mid = (start+end)/2
    newNode = InorderArray[mid]
    newNode.left = convertBalancedBST(InorderArray,root.left, 0, mid)
    newNode.right = convertBalancedBST(InorderArray,root.right, mid+1,n)
    return newNode;
}