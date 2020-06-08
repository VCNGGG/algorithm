/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let my_set = new Set();
    for(let i = 0;i<nums.length;i++){
        if(!my_set.has(nums[i])){
            my_set.add(nums[i]);
        }else{
            return true
        }
    }
    return false;
};
// @lc code=end

