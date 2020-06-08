/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let res = [];
    help(root, res);
    return res
};

function help(root, res) {
    if (root !== null) {
        help(root.left, res);
        help(root.right, res);
        res.push(root.val);
    }
}

// @lc code=end

