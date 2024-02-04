// Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.

// A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].

// A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.

 

// Example 1:

// Input: nums = [1,-2,3,-2]
// Output: 3
// Explanation: Subarray [3] has maximum sum 3.
// Example 2:

// Input: nums = [5,-3,5]
// Output: 10
// Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.
// Example 3:

// Input: nums = [-3,-2,-3]
// Output: -2
// Explanation: Subarray [-2] has maximum sum -2.


// For a circular subarray. MAxsum  = Maximum of (maxSubarray, total - minSubarray) ie MAxSubarray is the complement of minSubarray;
var maxSubarraySumCircular = function(nums) {
  let curMax = -Infinity;
  let globalMax = -Infinity;
  let curMin = Infinity;
  let globalMin=Infinity;
  let i = 0, sum=0;
  while(i < nums.length) {
      curMax = Math.max(nums[i], nums[i] + curMax);
      globalMax = Math.max(globalMax, curMax);
      curMin = Math.min(nums[i], nums[i] + curMin);
      globalMin = Math.min(globalMin, curMin);
      sum+=nums[i]
      i++;
  }

  return globalMax > 0 ? Math.max(globalMax, sum - globalMin) : globalMax;
};

console.log(maxSubarraySumCircular([5,-3,5]));