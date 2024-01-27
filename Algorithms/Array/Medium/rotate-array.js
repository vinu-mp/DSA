// Rotate Array

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7,8], k = 3   1567234
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]


const reverse = (ary, i, j) => {
  while(i <=j) {
      [ary[i], ary[j]] = [ary[j], ary[i]]
      i++;
      j--;
  }
  return ary;
}

var rotate = function(nums, k) {
    // Brute force 
    // let i=nums.length - k, res = [], j=0;
    // while(i < nums.length) {
    //   res[j++] = nums[i];
    //   i++;
    // }

    // i=0, j=k;
    // while(j < nums.length) {
    //   res[j++] = nums[i];
    //   i++;
    // }
    // return res;

    if(k > nums.length) return nums
    reverse(nums, 0, nums.length -1);

    reverse(nums, 0, k - 1);
    
    return reverse(nums, k, nums.length -1);
};

console.log('rotate =>', rotate([-1], 2))
console.log('rotate =>', rotate([1,2], 3))