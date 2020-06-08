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

//     console.log(save_arr);
//     if (letf === 0) {
//         arr.push([...track]);
//         return;
//     }

//     for (let i = begin; i < candidates.length; i++) {
//         console.log(candidates, i)
//         left = letf - candidates[i]
//         if (letf < 0) {
//             continue;
//         }
//         track.push(candidates[i]);
//         combinationSum2(candidates, left, track, i)
//         track.pop();
//     }

// };

// var arr = []

// var combinationSum = function (candidates, target) {

//     combinationSum2(candidates, target, [], 0);
//     return arr;

// };

// console.log(combinationSum([2,3,6,7], 7))

var combinationSum = function(candidates, target) {
    let n = candidates.length;
    let res = [];
    let tmpPath = [];
    let backtrack = (tmpPath,target,start) => {
        if(target < 0){
            return;
        }
        if(target == 0){
            res.push(tmpPath);
            return;
        }
        for(let i = start;i < n;i++){
            tmpPath.push(candidates[i]);
            backtrack(tmpPath.slice(),target - candidates[i],i);
            tmpPath.pop();
        }
    }
    backtrack(tmpPath,target,0);
    return res;
};

// @lc code=end

