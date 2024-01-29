/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map();
    let length = nums.length, i=0;
    while(i < length) {
      if(map.has(nums[i])) {
        if(map.get(nums[i])) {
          map.set(nums[i], false);
          nums.push(nums[i])
        }
      } else {
        map.set(nums[i], true);
      }
      i++;
    }

    return nums.reduce((acc, item) => acc ^ item)
};
// @lc code=end

