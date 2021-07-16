// Given the root of a binary tree, return the sum of all left leaves.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
// Example 2:

// Input: root = [1]
// Output: 0
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
var sumOfLeftLeaves = function(root) {
    if (root === null) {
        return null;
    }
    let ans = 0;
    let queue = [];
    queue.push(root);
    while(queue.length) {
        let tempQ= [];
        while(queue.length) {
            let node = queue.shift();
            if (node.left) {
                if (node.left.left === null && node.left.right === null) {
                    ans += node.left.val;
                }
                tempQ.push(node.left);
            }
            if (node.right) {
                tempQ.push(node.right);
            }  
        }
        queue = tempQ;
    }
    return ans;
};

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
var ans = 0;
var sumOfLeftLeaves = function(root) {
    if (root === null) {
        return null;
    }
    if(root.left === null && root.right === null) {
        return 0;
    }
    ans = 0;
    solve(root);
    return ans;
};

var solve = function(root) {
    if (root === null) {
        return;
    }
    if (root.left !== null && root.left.left === null && root.left.right === null) {
        ans += root.left.val;
    }
    else {
        solve(root.left);
    }
    if (root.right !== null) {
        solve(root.right);
    }  
}

