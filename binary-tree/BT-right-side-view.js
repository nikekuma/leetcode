// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

// Example 1:


// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (root === null) {
        return [];
    }
    let ans = [root.val];
    let queue = [];
    queue.push(root);
    while(queue.length) {
        let qLen = queue.length;
        for(let i=0; i<qLen; i++) {
            let node = queue.shift();
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
        let levelLen = queue.length
        if(queue[levelLen-1]) {
            ans.push(queue[levelLen-1].val);
        }
    }
    return ans;
};