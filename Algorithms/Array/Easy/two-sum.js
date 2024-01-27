// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice. 

// Example 1:

// Input: nums = [1,21,3,6,7,11,15], target = 9 // 2,7,11,15,21
// Output: [0,2]
// Explanation: Because nums[0] + nums[2] == 9, we return [0, 2].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSum = (ary, target) => {
  let map = new Map(), i=0;
  // while(i < ary.length) {
  //   if(map.has(ary[i])) {
  //     return [map.get(ary[i]), i]
  //   } else {
  //     map.set(target - ary[i], i)
  //   }
  //   i++;
  // }
  while(i < ary.length) {
    const diff = target - ary[i];
    if(map.has(diff)) {
      return [map.get(diff), i]
    } else {
      map.set(ary[i], i)
    }
    console.log(map)
    i++;
  }

return [];
}

console.log(twoSum([3,2,4], 6))