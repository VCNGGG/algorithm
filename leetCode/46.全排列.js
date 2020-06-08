// /*
//  * @lc app=leetcode.cn id=46 lang=javascript
//  *
//  * [46] 全排列
//  */

// // @lc code=start
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */

let res = []
/* 主函数，输入一组不重复的数字，返回它们的全排列 */
var permute = function (nums) {
    // 记录「路径」

    backtrack(nums, []);
    return res;
}
// 路径：记录在 track 中
// 选择列表：nums 中不存在于 track 的那些元素
// 结束条件：nums 中的元素全都在 track 中出现
function backtrack(nums, track) {
    // 触发结束条件
    if (track.length == nums.length) {
        res.push([...track]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        // 排除不合法的选择
        if (track.includes(nums[i]))
            continue;
        // 做选择
        track.push(nums[i]);
        // 进入下一层决策树
        backtrack(nums, track);
        // 取消选择
        track.pop();
    }
}


console.log(permute([1,1,2]))



// function permute (nums) {
//     let res = []
//     perm(nums, 0, nums.length - 1, res)
//     return res
//   }

//   // p 全排列的开始位置 q 全排列的结束位置
//   function perm (arr, p, q, res) {

//     if (p === q) {
//       console.log('当前已全部排列完', arr)
//       res.push([...arr])
//     } else {
//       for (let i = p; i <= q; i++) {
//         console.log(`这是要对 ${arr[p]}(下标 ${p}) - ${arr[q]}(下标 ${q}) 进行全排列, 当前 arr ${arr}`)
//         swap(arr, i, p)
//         console.log(`交换了 ${arr[i]}(下标 ${i}) 和 ${arr[p]}(下标 ${p}) 的位置, 当前 arr ${arr}`)
//         perm(arr, p + 1, q, res)
//         console.log(`再次交换 ${arr[i]}(下标 ${i}) 和 ${arr[p]}(下标 ${p}) 的位置, 当前 arr ${arr}`)
//         // 这里再次交换是为了保证 arr 的相对一致
//         swap(arr, i, p)
//       }
//     }
//   }

//   function swap (arr, p, q) {
//     let temp = arr[p]
//     arr[p] = arr[q]
//     arr[q] = temp
//   }



// console.log(permute([1,2,3]))



// let res = []
// /* 主函数，输入一组不重复的数字，返回它们的全排列 */
// var permuteUnique = function (nums) {
//     // 记录「路径」

//     // nums.sort()

//     backtrack(nums, [], []);
//     return res;
// }
// // 路径：记录在 track 中
// // 选择列表：nums 中不存在于 track 的那些元素
// // 结束条件：nums 中的元素全都在 track 中出现
// function backtrack(nums, used, track) {
//     // 触发结束条件
//     if (track.length == nums.length) {
//         res.push([...track]);
//         return;
//     }
//     for (let i = 0; i < nums.length; i++) {
//         // 排除不合法的选择

//         if (used[i]) {
//             break;
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
//         backtrack(nums, used, track);
//         // 取消选择
//         track.pop();
//         used[i] = false
//     }
// }



// console.log(permuteUnique([2, 5, 1]))




