// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
  // let map=new Map() , i=0, max=1, res;

  // while(i < nums.length) {
  //   if(map.has(nums[i])) {
  //     const val = map.get(nums[i]) + 1;
  //     map.set(nums[i], val);

  //     if(val > max) {
  //       res = nums[i];
  //       max = val;
  //     }
  //   } else {
  //     map.set(nums[i], 1)
  //   }
  //   i++;
  // }

  // return res;

  let i = 1,
  count =1,
  element = nums[0];

  while(i < nums.length) {
      nums[i] === element ? count++ :  count--;
      if(count === 0) {
          element = nums[i];
          count=1;
      }
      i++;
  }
  return element;
}

console.log(majorityElement([2,2,1,1,1,2,2]))