/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


// var save_arr = []
// var combinationSum2 = function (candidates, letf, track, begin) {

//     if (letf === 0) {
//         arr.push([...track]);
//         return;
//     }
//     for (let i = begin; i < candidates.length; i++) {
//         left = letf - candidates[i]
//         if (letf < 0) {
//             continue;
//         }
//         // if(candidates[begin] === candidates[begin-1]){
//         //     continue;
//         // }
//         if (i > begin && candidates[i] == candidates[i - 1]) {
//             continue;
//         }
//         track.push(candidates[i]);
//         combinationSum2(candidates, left, track, i + 1)
//         track.pop();
//     }

// };
// var arr = []
// var combinationSum = function (candidates, target) {
//     candidates.sort(function (a, b) {
//         return a > b;
//     });
//     console.log(candidates)
//     combinationSum2(candidates, target, [], 0);
//     return arr;

// };
// console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 8))

var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    var result = [], n = candidates.length
  
    function backtrack(start, sum, list) {
      if (sum === target) {
        result.push(list)
      }
      for (let i = start; i < n; i++) {
        if (candidates[i] + sum > target) break;
        //相同数字只允许循环的第一个递归，避免重复
        if (candidates[i] === candidates[i - 1] && i > start) continue;
        backtrack(i + 1, sum + candidates[i], [...list, candidates[i]])
      }
    }
  
    backtrack(0, 0, [])
  
    return result
  }
// @lc code=end

