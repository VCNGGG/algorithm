/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var start = 0;
    var end = nums.length -1;
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (nums[mid] < target) {
            start = mid + 1;
        } else if (nums[mid] > target) {
            end = mid - 1
        } else if (nums[mid] === target) {
            return mid
        }
    }
    return -1;
};
// @lc code=end

