// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

var productExceptSelf = function(nums) {
  // Calculate left product  * right product without nums[i];
  let res = [1], i=1, cur=1;
  while(i< nums.length) {
    cur = cur * nums[i - 1];
    res[i] = cur;
    i++;
  }

  let j = nums.length - 2;
  cur = 1;
  while(j >=0) {
    cur = cur * nums[j + 1];
    res[j] = Math.abs(cur * res[j]);
    j--;
  }

  return res;
}

console.log(productExceptSelf([-1,1,0,-3,3]))