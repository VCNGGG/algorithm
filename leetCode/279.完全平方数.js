/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let q = [];
    q.push([n, 0]);
    let visited = [];
    visited[n] = true;
    while (q.length > 0) {
        // console.log("qq",q);
        let data = q.shift();
        let num = data[0];
        let step = data[1];
        for (let i = 1; ; i++) {
            let a = num - i * i;
            if (a < 0) break;
            if (a === 0) return step + 1;
            if(!visited[a]){
                q.push([a, step + 1])
                visited[a] = true
            }
        }
    }

};

console.log(numSquares(12))
// @lc code=end

