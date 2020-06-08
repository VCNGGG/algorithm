/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

function bitSquareSum(n) {
    let sum = 0;
    while (n > 0) {
        let bit = n % 10;
        sum += bit * bit;
        n = Math.floor(n / 10);
    }
    return sum;
}

var isHappy = function (n) {
    let set = new Set();
    while (n !== 1) {
        n = bitSquareSum(n)
        if (set.has(n)) {
            return false;
        }
        set.add(n);
    }
    return true
};
// @lc code=end

// class Solution {
//     public:
//         int bitSquareSum(int n) {
//             int sum = 0;
//             while(n > 0)
//             {
//                 int bit = n % 10;
//                 sum += bit * bit;
//                 n = n / 10;
//             }
//             return sum;
//         }

//         bool isHappy(int n) {
//             int slow = n, fast = n;
//             do{
//                 slow = bitSquareSum(slow);
//                 fast = bitSquareSum(fast);
//                 fast = bitSquareSum(fast);
//             }while(slow != fast);

//             return slow == 1;
//         }
//     };
