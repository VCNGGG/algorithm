/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !==t.length) return false
    let i = 0;
    let s_map = new Map();
    let t_map = new Map();
    while(i<s.length){
        let one_s = s_map.get(s[i]);
        let one_t = t_map.get(t[i]);

        if(!one_s){
            s_map.set(s[i],i)
        }

        if(!one_t){
            t_map.set(t[i],i)
        }

        if(one_s !== one_t) return false

        i++
    }
    return true;

};
// @lc code=end

