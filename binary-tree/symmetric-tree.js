// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

// Example 1:


// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
// Output: false

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
var isSymmetric = function(root) {
    if (root === null) {
        true;
    }
    return solve(root.left, root.right);
};

var solve =  function(root1, root2) {
    if ((root1 === null && root2 !== null) || (root1 !== null && root2 === null)) {
        return false;
    }
    if (root1 === null && root2 === null) {
        return true;
    }
    if (root1.val === root2.val) {
        return solve(root1.left, root2.right) && solve(root1.right, root2.left);
    } else {
        return false;
    }  
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        true;
    }
    return solve(root.left, root.right);
};

var solve =  function(root1, root2) {
    if (!root1 && !root2) {
        return true;
    }
    if (!root1 || !root2) {
        return false;
    }
    if (root1.val === root2.val) {
        return solve(root1.left, root2.right) && solve(root1.right, root2.left);
    } else {
        return false;
    }  
}