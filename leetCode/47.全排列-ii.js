/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let res = []
/* 主函数，输入一组不重复的数字，返回它们的全排列 */
var permuteUnique = function (nums) {
    // 记录「路径」

    nums.sort()

    backtrack2(nums, [], []);
    return res;
}
// 路径：记录在 track 中
// 选择列表：nums 中不存在于 track 的那些元素
// 结束条件：nums 中的元素全都在 track 中出现
function backtrack2(nums, used, track) {
    // 触发结束条件
    if (track.length == nums.length) {
        res.push([...track]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        // 排除不合法的选择

        if (used[i]) {
            continue;
        }
        if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
            continue;
        }

        // 做选择
        track.push(nums[i]);
        used[i] = true
        // 进入下一层决策树
        backtrack2(nums, used, track);
        // 取消选择
        track.pop();
        used[i] = false

    }
}


console.log(permuteUnique([2, 2, 5, 1]))

