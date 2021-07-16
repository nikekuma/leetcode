// Given the root of a binary tree, return the sum of values of its deepest leaves.
 

// Example 1:


// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15
// Example 2:

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19
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
var maxDepthSum = {
    'depth': 0,
    'sum': 0
};
var deepestLeavesSum = function(root) {
    if (root === null) {
        return null;
    }
    let depth = 0;
    maxDepthSum = {
        'depth': 0,
        'sum': 0
    };
    solve(root, depth);;
    return maxDepthSum.sum;
};

var solve = function(root, depth) {
    if (root === null) {
        return null;
    }
    solve(root.left, depth+1);
    solve(root.right, depth+1);
    if (root.left === null && root.right === null) {
        if (maxDepthSum.depth === depth) {
            maxDepthSum = {
                'depth': depth,
                'sum': maxDepthSum.sum + root.val
            }
        } else if (maxDepthSum.depth < depth) {
            maxDepthSum = {
                'depth': depth,
                'sum': root.val
            }
        }  
    }
}