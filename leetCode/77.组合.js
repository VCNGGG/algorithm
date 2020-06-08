/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */


var combine = function(n, k) {
    
    var res = [];
    var could = [];
    if(k==0){
        return [[]]
    }
    function dfs(start,n,k,res,could){
        if(could.length == k){
            res.push(could.slice(0));
            return;
        }
        for(var i = start ; i<n+1;i++){
            could.push(i);
            dfs(i+1,n,k,res,could);
            could.pop()
        }
        return res;
    }
    return dfs(1,n,k,res,could)
};


// let res = []
// /* 主函数，输入一组不重复的数字，返回它们的全排列 */
// var combine = function (n, k) {
//     // 记录「路径」

//     let nums = [];
//     for (let i = 1; i <= n; i++) {
//         nums.push(i)
//     }

//     backtrack(nums, [], [], k);
//     return res;
// }
// // 路径：记录在 track 中
// // 选择列表：nums 中不存在于 track 的那些元素
// // 结束条件：nums 中的元素全都在 track 中出现
// function backtrack(nums, used, track, k) {
//     // 触发结束条件
//     if (track.length == k) {
//         if (k === 1 || (k > 1 && track[0] < track[1]&& track[1] < track[2]))
//             res.push([...track]);
//         return;
//     }
//     for (let i = 0; i < nums.length; i++) {
//         // 排除不合法的选择

//         if (used[i]) {
//             continue;
//         }


//         // 剪枝条件：i > 0 是为了保证 nums[i - 1] 有意义
//         // 写 !used[i - 1] 是因为 nums[i - 1] 在深度优先遍历的过程中刚刚被撤销选择

//         // if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
//         //     continue;
//         // }

//         // 做选择
//         track.push(nums[i]);
//         used[i] = true
//         // 进入下一层决策树
//         backtrack(nums, used, track, k);
//         // 取消选择
//         track.pop();
//         used[i] = false
//     }
// }


// let res = []
// /* 主函数，输入一组不重复的数字，返回它们的全排列 */
// var combine = function (n, k) {
//     // 记录「路径」

//     let nums = [];
//     for (let i = 1; i <= n; i++) {
//         nums.push(i)
//     }

//     backtrack(nums, 0, [], k);
//     return res;
// }
// // 路径：记录在 track 中
// // 选择列表：nums 中不存在于 track 的那些元素
// // 结束条件：nums 中的元素全都在 track 中出现
// function backtrack(nums, first, track, k) {
//     // 触发结束条件
//     if (track.length == k) {
//             res.push([...track]);
//         return;
//     }
//     for (let i = first; i < nums.length; ++i) {
//         // 排除不合法的选择

//         // if (used[i]) {
//         //     continue;
//         // }
//         // if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
//         //     continue;
//         // }

//         // 做选择
//         track.push(nums[i]);
//         // used[i] = true
//         // 进入下一层决策树
//         backtrack(nums, i+1, track, k);
//         // 取消选择
//         track.pop();
//         // used[i] = false
//     }
// }



// console.log(combine(6, 3))




// @lc code=end

