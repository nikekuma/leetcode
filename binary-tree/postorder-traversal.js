// Given the root of a binary tree, return the postorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
// Example 4:


// Input: root = [1,2]
// Output: [2,1]
// Example 5:


// Input: root = [1,null,2]
// Output: [2,1]
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
 * @return {number[]}
 */
var ans = [];
var postorderTraversal = function(root) {
    if (root === null) {
        return [];
    }
    ans = [];
    solve(root);
    return ans;
};

var solve = function(root) {
    if (root ===  null) {
        return;
    }
    solve(root.left);
    solve(root.right);
    ans.push(root.val);
}