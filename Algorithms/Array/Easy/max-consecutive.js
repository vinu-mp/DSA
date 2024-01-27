// Given an Array return maximum consecutive ones

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

var findMaxConsecutiveOnes = function(nums) {
    let i=0;
    let res=0, count = 0;
    while(i< nums.length) {
      if(nums[i] === 1) {
        count++;
      } else {
        res = Math.max(count, res);
        count = 0;
      }
      i++;
    }
    return Math.max(count, res);
};

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))