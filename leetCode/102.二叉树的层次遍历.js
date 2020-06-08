/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
var levelOrder = function (root) {
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

        if (node.left !== null) {
            queue.push([node.left, level + 1])
        }

        if (node.right !== null) {
            queue.push([node.right, level + 1])
        }

    }
    return res;
};

// var levelOrder = function (root) {
// 	if (!root) return []
// 	let ret = [], queue = [root]
// 	while (queue.length) {
// 		let level_size = queue.length
// 		let current_level = []
// 		while (level_size--) {
// 			let node = queue.shift()
// 			current_level.push(node.val)
// 			if (node.left) queue.push(node.left)
// 			if (node.right) queue.push(node.right)
// 		}
// 		ret.push(current_level)
// 	}
// 	return ret
// };


// console.log(levelOrder([3,9,20,null,null,15,7]))
// @lc code=end

