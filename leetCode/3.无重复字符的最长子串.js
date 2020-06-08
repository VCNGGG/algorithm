/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = 0;
    let l = 0;
    let res = 0;
    let s_set = new Set();
    while (i < s.length) {
        if (!s_set.has(s[l]) && l<s.length) {
            s_set.add(s[l]);
            l++;
        } else {
            s_set.delete(s[i])
            i++;
        }
        res = Math.max(res, l - i )
    }
    return res

};


console.log(lengthOfLongestSubstring("pwwkew"))

// @lc code=end

