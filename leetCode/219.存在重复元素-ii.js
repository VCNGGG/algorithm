/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let myset = new Set();
    let length = nums.length < k ? nums.length : k
    for (let i = 0; i <= length; i++) {
        if (myset.has(nums[i])) {
            return true;
        } else {
            myset.add(nums[i])
        }
    }
    let left = 0;
    let right = k;
    while (right < nums.length) {
        myset.delete(nums[left]);
        left++;
        if (right < nums.length ){
            right++;
        }
        if (myset.has(nums[right])) {
            return true;
        } else {
            myset.add(nums[right])
        }
    }
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10], 15))

// @lc code=end

