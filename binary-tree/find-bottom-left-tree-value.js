// Given the root of a binary tree, return the leftmost value in the last row of the tree.

 

// Example 1:


// Input: root = [2,1,3]
// Output: 1
// Example 2:


// Input: root = [1,2,3,4,null,5,6,null,null,7]
// Output: 7
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
var maxDepth = 0;
var ans = null;
var findBottomLeftValue = function(root) {
    if(root === null) {
        return null;
    }
    if(root.left === null && root.right === null) {
        return root.val;
    }
    maxDepth = 0;
    ans = null;
    return solve(root, 0);
};

var solve = function(root, depth) {
    if(root === null) {
        return;
    }
    solve(root.left, depth+1);
    solve(root.right, depth+1);
    if(depth > maxDepth) {
        maxDepth = depth;
        ans = root.val;
    }
    return ans;
}