/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    
    let ans = [];

    backtrack(0, []);
    return ans;

    function backtrack(index, path) {
        if(index === s.length) {
            ans.push(path.slice());
            return;
        }
        for(let i = index; i < s.length; i++) {
            if(!isPalindrome(index, i)) continue;
            path.push(s.slice(index, i+1));
            backtrack(i+1, path);
            path.pop();
        }
    }

    function isPalindrome(start, end) {
        let lo = start;
        let hi = end;

        while(lo < hi) {
            if(s[lo++] !== s[hi--]) return false;
        }
        return true;
    }
};

// @lc code=end

