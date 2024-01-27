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
    // let prefixArray = new Array(nums.length),
    // suffixArray = new Array(nums.length), res = [];

    // // Left products
    // prefixArray[0] = 1;
    // let i = 1;
    // while(i < nums.length) {
    //   prefixArray[i] = nums[i-1] * prefixArray[i-1];
    //   i++;
    // }

    // i = nums.length - 1;
    // suffixArray[i] = 1;
    // i--;
    // while(i >= 0) {
    //   suffixArray[i] = nums[i+1] * suffixArray[i+1];
    //   i--;
    // }

    // i=0;
    // while(i < nums.length) {
    //   res[i] = prefixArray[i] * suffixArray[i];
    //   i++;
    // }
    // return res;
    let res=[1], prefix=1, suffix=1;

    let i = 1;
    while(i < nums.length) {
      res[i] = nums[i-1] * prefix;
      prefix = res[i];
      i++;
    }

    i = nums.length - 2;
    while(i >=0 ) {
      let abc = nums[i+1] * suffix;
      res[i]*=abc;
      suffix = abc;
      i--;
    }

    return res;
};

console.log('result is', productExceptSelf([1,2,3,4]));