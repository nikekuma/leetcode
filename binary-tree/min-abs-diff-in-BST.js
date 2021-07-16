// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

 

// Example 1:


// Input: root = [4,2,6,1,3]
// Output: 1
// Example 2:


// Input: root = [1,0,48,null,null,12,49]
// Output: 1
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
 * @return {number}
 */
var ans = Number.MAX_SAFE_INTEGER;
var prevNode = Number.MAX_SAFE_INTEGER;
var getMinimumDifference = function(root) {
    if(root === null) {
        return null;
    }
    ans = Number.MAX_SAFE_INTEGER;
    prevNode = Number.MAX_SAFE_INTEGER;
    solve(root);
    return ans;
};

var solve = function(root) {
    if(root === null) {
        return;
    }
    solve(root.left);
    ans = Math.min(ans, Math.abs(root.val-prevNode))
    prevNode = root.val;
    solve(root.right);
}