/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    let res = [];
    help(root, res);
    return res
};

function help(root, res) {
    if (root !== null) {
        res.push(root.val);
        help(root.left, res);
        help(root.right, res);
    }
}

// @lc code=end

