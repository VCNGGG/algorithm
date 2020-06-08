/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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

// var rightSideView = function(root) {

//     let res = []
//     while (root !== null) {
//         res.push(root.val)
//         if(root.right === null){
//             root = root.left
//         }else{
//             root = root.right
//         }
//     }
//     return res;
// };

var rightSideView = function(root) {
    if (root === null) return []
    let result = []
    let queue = [root]
    while (queue.length > 0) {
      let right
      let len = queue.length
      for (let i=0; i<len; i++) {
        let cur = queue.shift()
        right = cur.val
        cur.left && queue.push(cur.left)
        cur.right && queue.push(cur.right)
      }
      result.push(right)
    }
    return result
  }
  

// @lc code=end

