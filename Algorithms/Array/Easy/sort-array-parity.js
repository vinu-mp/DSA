// Sort Array By Parity II
// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.

 

// Example 1:

// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
// Example 2:

// Input: nums = [2,3]
// Output: [2,3]

var sortArrayByParityII = function(nums) {
    // let res = []; oddIndex=1, evenIndex=0, i = 0;
    // while(i < nums.length) {
    //   if(nums[i] % 2 === 0) {
    //     res[evenIndex] = nums[i];
    //     evenIndex+=2;
    //   } else {
    //     res[oddIndex] = nums[i];
    //     oddIndex+=2;
    //   }
    //   i++;
    // }
    // return res;

   // without using additional memory

   let i=0, j=1;
    while(i < nums.length) {
      if(!(nums[i] % 2)) {
        i+=2;
      } else {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        j+=2;
      }
    }
    return nums;
};

console.log(sortArrayByParityII([5,4,8,1,3,2,12,13]))
