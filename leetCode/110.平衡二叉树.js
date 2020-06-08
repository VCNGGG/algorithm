/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */

function getHeight(node) {
    if (node === null) return 0;
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}

var isBalanced = function (root) {
    if (root === null) return true;
    return isBalanced(root.left) && isBalanced(root.right) &&
        Math.abs(getHeight(root.left) - getHeight(root.right)) < 2;
};

// @lc code=end

