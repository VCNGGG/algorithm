/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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

function isSame(root1, root2) {

    
    if (root1 ==null && root2== null) return true

    if (root1 ==null || root2 ==null) return false



    if (root1.val !== root2.val) return false

    return isSame(root1.left, root2.right) &&
        isSame(root1.right, root2.left);


}

var isSymmetric = function (root) {

    let is = isSame(root, root)
    return is;
};


// @lc code=end

