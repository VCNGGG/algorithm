/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
    let res = [];
    help(root, res);
    return res
};

function help(root, res) {
    if (root !== null) {
        help(root.left, res);
        res.push(root.val);
        help(root.right, res);
    }
}

var inorderTraversal = function(root) {
    let arr = []
    let stackArr = []
    while(root!=null || stackArr.length!=0){

        while(root!=null){
            stackArr.push(root)
            root = root.left
        }
        root = stackArr.pop()
        arr.push(root.val)
        root = root.right
    }
    return arr
};
// @lc code=end

