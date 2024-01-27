// Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, 
// but instead be stored inside the array nums1. 
// To accommodate this, nums1 has a length of m + n, 
// where the first m elements denote the elements that should be merged, 
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


var merge = function(nums1, m, nums2, n) {
  let i = m+n - 1;
  let nums1Tracker = m - 1;
  let nums2Tracker = n - 1;
  while(i >= 0) {
    if(nums1Tracker < 0){
      nums1[i] = nums2[nums2Tracker--];
    }
    else if(nums2Tracker < 0) {
      nums1[i] = nums1[nums1Tracker--];
    }
    else if(nums1[nums1Tracker] < nums2[nums2Tracker]){
      nums1[i] = nums2[nums2Tracker--];
    } else {
      nums1[i] = nums1[nums1Tracker];
      nums1Tracker --;
    }
    i--;
  }
  return nums1;
};

console.log(merge([2,0], 1, [1], 1 ))
console.log(merge([1,1,3,5,8,12,0,0,0,0,0], 6, [1,4,6,7,8], 5 ))
console.log(merge([0], 0, [1], 1 ))
console.log(merge([4,5,6,0,0,0], 3, [1,2,3], 3 ))
