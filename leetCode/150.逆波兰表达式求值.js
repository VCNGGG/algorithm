/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
const SIGN = {
    '*' : (a, b) => a * b,
    '/' : (a, b) => Math.trunc(a / b),
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b
}
var evalRPN = function(tokens) {
    const stack = [];
    tokens.forEach(item => {
        console.log(item);
        if (item in SIGN){
            const b = stack.pop();
            const a = stack.pop();
            const res = SIGN[item](a, b);
            stack.push(res);
        }
        else stack.push(Number(item));
    })
    return stack.pop();
};


console.log(evalRPN(["4","13","5","/","+"]))

// @lc code=end

