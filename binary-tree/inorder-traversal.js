// Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,3,2]
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
// Output: [1,2]
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
var inorderTraversal = function(root) {
    let ans = [];
    solve(root, ans);
    return ans;
};

var solve = function(root, ans) {
    if (root === null) {
        return;
    }
    solve(root.left, ans);
    ans.push(root.val);
    solve(root.right, ans);
};

var inorderTraversal = function(root) {
    let curr = root;
    let ans = [];
    let stack = [];
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left
        }
        curr = stack.pop();
        ans.push(curr.val);
        curr = curr.right;
    }
    return ans;
};