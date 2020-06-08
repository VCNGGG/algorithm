/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function sumLeft(root, is_left) {

    if(root === null) return 0;

    if (root.left === null && root.right === null && is_left === true) return root.val
    if (root.left === null && root.right === null && is_left === false) return 0;

    return sumLeft(root.left, true) + sumLeft(root.right, false)
}
var sumOfLeftLeaves = function (root) {
    let res = sumLeft(root,false)
    return res;
};

// @lc code=end

