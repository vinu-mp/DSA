//53:  Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

var maxSubArray = function(nums) {
  // Bruteforce
  // let sum=0, max= -Infinity;
  // for(i=0; i< nums.length; i++) {
  //     sum=0;
  //     for(j=i; j < nums.length; j++) {
  //         sum +=nums[j];
  //         max = Math.max(max, sum);
  //     }
  // }
  // return max;

  // Kadanes
  let i=0, sum = 0, max = -Infinity, start = -1, end = -1, startFlag = -1;

  while( i < nums.length) {

      if(sum === 0) 
      startFlag = i;

      sum += nums[i]; 

      if(sum > max) {
          max= sum;
          end = i;
          start = startFlag;
      }

      if(sum < 0) 
      sum = 0;

      i++;
  }

  console.log('array => ', nums.slice(start, end + 1))
  return max;


  // Alternate approach
  // let curSum = -Infinity, global=-Infinity
  // let i=0;
  // while(i < nums.length) {
  //     curSum = Math.max(nums[i], curSum + nums[i] );
  //     global = Math.max(global, curSum)
  //     i++;
  // }
  // return global
};

console.log(maxSubArray([-2,-3,-3]));