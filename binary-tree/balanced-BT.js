// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true
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
 * @return {boolean}
 */
var ans = true;
var isBalanced = function(root) {
    if (root === null) {
        return true;
    }
    ans = true;
    solve(root);
    return ans;
};

var solve = function(root) {
    if (root === null) {
        return -1;
    }
    let leftHeight = solve(root.left);
    let rightHeight = solve(root.right);
    let heightDiff = Math.abs(leftHeight - rightHeight);
    if (heightDiff > 1) {
        ans = false;
        return -1;
    }
    return 1 + Math.max(leftHeight, rightHeight);
}