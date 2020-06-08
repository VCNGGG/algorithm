/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let max = 0 ;
    while(left<right){
        let temp_max 
        if(height[left]<height[right]){
           temp_max =  height[left] * (right - left)
           left++
        }else{
           temp_max =  height[right] * (right - left)
           right--
        }
        if(temp_max>max){
            max = temp_max
        }
    }
    return max

};
// @lc code=end

