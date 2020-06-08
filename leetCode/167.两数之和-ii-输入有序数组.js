/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let mid = -1

    let start = 0;
    let end = numbers.length

    let target_index = 0;

    while (1) {
        mid = Math.floor((start + end) / 2)
        if (numbers[mid] > target) {

            if (numbers[mid - 1] < target) {
                target_index = mid
                break;
            }
            end = mid - 1;

        } else if (numbers[mid] === target) {
            target_index = mid
            break;
        } else if (numbers[mid] < target) {


            if (mid === numbers.length - 1) {
                target_index = mid + 1
                break;
            }

            if (numbers[mid + 1] > target) {
                target_index = mid + 1
                break;
            }

            start = mid + 1;
        }

    }

    let arr = numbers.slice(0, target_index);

    for (let i = arr.length - 1; i >= 0; i--) {

        if (arr.includes(target - arr[i])) {
            return [arr.indexOf(target - arr[i]) + 1, i + 1]
        }
    }


};


console.log(twoSum([2, 3, 4], 6))

// @lc code=end

