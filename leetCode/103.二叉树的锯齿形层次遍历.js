/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    // console.log(root);
    // console.log(root.val)
    let res = []
    if (root == null) {
        return res;
    }
    // console.log(root.val)
    let queue = [[root, 0]];
    // console.log(root.val)
    while (queue.length) {
        let queue_member = queue.shift();
        // console.log("queue_member",queue_member)
        let node = queue_member[0];
        let level = queue_member[1]

        if (level === res.length) {
            res.push([node.val])
        } else {
            res[level].push(node.val)
        }

        if (level % 2 === 1) {
            if (node.right !== null) {
                queue.push([node.right, level + 1])
            }
            if (node.left !== null) {
                queue.push([node.left, level + 1])
            }
        } else {
            if (node.left !== null) {
                queue.push([node.left, level + 1])
            }
            if (node.right !== null) {
                queue.push([node.right, level + 1])
            }
        }



    }
    return res;
};
// @lc code=end

