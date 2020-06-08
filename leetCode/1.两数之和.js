/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums,target) => {
    let map = {}; //初始化哈希表

    for(let i=0;i<nums.length;i++) { //遍历数组
        const complement = target - nums[i];

        //在导入数组的同时检查是否已经包含目标元素
        if(map.hasOwnProperty(complement) && map[complement] !== i) { 
            return [i,map[complement]]; //输出当前索引和哈希表对应索引
        }
        //若没有包含目标元素，则导入数组元素，继续循环
        map[nums[i]] = i;
    }
}


