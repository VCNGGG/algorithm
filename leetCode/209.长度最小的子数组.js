/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let i = 0;
    let j = 1;
    let minLength = Number.MAX_VALUE;
    let sum = nums[0];
    while (i < nums.length || j < nums.length) {
        if (sum >= s) {
            let minLength_temp = j - i;
            if (minLength_temp < minLength) {
                minLength = minLength_temp
            }
            sum -= nums[i]
            i++;
        } else if (j >= nums.length) {
            sum -= nums[i]
            i++;
        }
        else if (j < nums.length) {
            sum += nums[j];
            j++;

        }
    }
    return minLength === Number.MAX_VALUE ? 0 : minLength;
};


// @lc code=end

