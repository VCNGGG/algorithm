/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    var arr = [];
    map.forEach((value, key) => arr.push({ name: key, value: value }));
    arr.sort((a, b) => b.value - a.value);
    var arr2 = []
    for (var i = 0; i < k; i++) {
        arr2.push(arr[i].name)
    }
    return arr2;
};

// @lc code=end

