// Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
  let res = [];
  let i = 0;
  let str = strs[0];
  while (i < str.length) {
    let j=1;
    while(j < strs.length) {
      if(str[i] !== strs[j][i]) {
        return res.join('');
      }
      j++;
    }
    res.push(str[i]);
    i++;
  }
  return res.join('')
};

console.log(longestCommonPrefix(["flower","flow","flight", 'fb']));