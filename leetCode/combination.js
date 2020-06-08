/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var save_arr = []
var combinationSum2 = function (candidates, letf, track, begin) {

    console.log(save_arr);
    if (letf === 0) {
        arr.push([...track]);
        return;
    }

    if (letf < 0) {
        return;
    }

    for (let i = begin; i < candidates.length; i++) {
        console.log(candidates, i)
        track.push(candidates[i]);
        combinationSum2(candidates, letf - candidates[i], track, i)
        track.pop();
    }

};

var arr = []

var combinationSum = function (candidates, target) {

    combinationSum2(candidates, target, [], 0);
    return arr;

};


console.log(111, combinationSum([2, 3,5], 8))