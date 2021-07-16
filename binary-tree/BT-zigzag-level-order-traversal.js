// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
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
var zigzagLevelOrder = function(root) {
    if(root === null) {
        return [];
    }
    let ans = [];
    let queue = [];
    let count = 0
    queue.push(root);
    while(queue.length) {
        let tempQ = [];
        let subAns = [];
        while(queue.length) {
            let node = queue.shift();
            subAns.push(node.val);
            if(node.left) {
                tempQ.push(node.left);
            }
            if(node.right) {
                tempQ.push(node.right);
            }
        }
        queue = tempQ;
        if(count%2 === 0) {
            ans.push(subAns);
        } else {
            ans.push(subAns.reverse());
        }
        count++;
    }
    return ans;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(root === null) {
        return [];
    }
    let ans = [];
    let queue = [];
    let count = 0
    queue.push(root);
    while(queue.length) {
        let tempQ = [];
        let stack = [...queue];
        let subAns = [];
        while(queue.length) {
            let node = queue.shift();
            let top = stack.pop();
            if(count%2 === 0) {
                subAns.push(node.val);
            } else {
                subAns.push(top.val);
            }
            if(node.left) {
                tempQ.push(node.left);
            }
            if(node.right) {
                tempQ.push(node.right);
            }
        }
        queue = tempQ;
        ans.push(subAns);
        count++;
    }
    return ans;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(root === null) {
        return [];
    }
    let ans = [];
    let queue = [];
    let count = 0
    queue.push(root);
    while(queue.length) {
        let Qlen = queue.length
        let subAns = Array(Qlen);
        for(let i=0; i<Qlen; i++) {
            let node = queue.shift();
            if(count%2 === 0) {
                subAns[i] = node.val;
            } else {
                subAns[Qlen-1-i] = node.val;
            }
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
        ans.push(subAns);
        count++;
    }
    return ans;
};