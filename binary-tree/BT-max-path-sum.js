// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any path.

 

// Example 1:


// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
// Example 2:


// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
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
var ans = Number.MIN_SAFE_INTEGER;
var maxPathSum = function(root) {
    if(root === null) {
        return null;
    }
    ans = Number.MIN_SAFE_INTEGER;
    solve(root, 0);
    return ans;
};
var solve = function(root, pathSum) {
    if(root === null) {
        return Number.MIN_SAFE_INTEGER;
    }
    let leftSum = solve(root.left, pathSum);
    let rightSum = solve(root.right, pathSum);
    pathSum = root.val + leftSum + rightSum; 
    let passVal = root.val + Math.max(leftSum, rightSum);
    ans = Math.max(ans, root.val, leftSum, rightSum, pathSum, passVal);
    return Math.max(root.val, passVal);
}