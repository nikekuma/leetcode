// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }
    let ans = [];
    let queue = [];
    queue.push(root);
    while(queue.length) {
        let tempQ = [];
        let tempAns = [];
        while(queue.length) {
            let node = queue.shift();
            tempAns.push(node.val);
            if(node.left) {
                tempQ.push(node.left);
            }
            if(node.right) {
                tempQ.push(node.right);
            }
        }
        queue = tempQ;
        ans.push(tempAns);
    }
    return ans;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var ans = [];
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }
    ans = [];
    solve(root, 0);
    return ans;
};

var solve = function(root, depth) {
    if (root === null) {
        return;
    }
    if(!ans[depth]) {
       ans[depth] = [];
    }
    ans[depth].push(root.val);
    solve(root.left, depth+1);
    solve(root.right, depth+1);
}

