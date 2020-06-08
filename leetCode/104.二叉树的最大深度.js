/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
    if(root === null){
        return 0;
    }
    let leftMaxDepth = maxDepth(root.left) + 1;
    let rightMaxDepth = maxDepth(root.right) + 1;
    let max = Math.max(leftMaxDepth,rightMaxDepth);
    return max;
};
// @lc code=end

