/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {

    let res = [];
    let tmpPath = [];
    let backtrack = (tmpPath, target, start) => {
        if (target < 0) {
            return;
        }
        if (k === tmpPath.length && target == 0) {
            res.push(tmpPath);
            return;
        }
        for (let i = start; i < 10; i++) {
            tmpPath.push(i);
            backtrack(tmpPath.slice(), target - i, i + 1);
            tmpPath.pop();
        }
    }
    backtrack(tmpPath, n, 1);
    return res;
};

// var combinationSum3 = function(k, n) {
//     let res = [];
//     let temp = [];
//     let backtrack=(temp,n,start)=>{

//        if(k===temp.length&&n==0){
//            res.push(temp);
//            return;
//        }
//        for(let i=start;i<10;i++){
//            temp.push(i)
//            backtrack(temp.slice(),n-i,i+1);
//            temp.pop();
//            }
//        }

//     backtrack(temp,n,1);
//     return res;
// };



// @lc code=end
