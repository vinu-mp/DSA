// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

var strStr = function(haystack, needle) {
  let  i=0, start=0, window = needle.length - 1;
  while(i < haystack.length) {
    if(i - start === window) {
      let subStr = haystack.substring(start, i+1);
      if(subStr === needle) return start;
      else start++;
    }
    i++;
  }
};

console.log(strStr('sa sfh sadbutsad', 'sad'))