// Longest Substring Without Repeating Characters.

// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcebadbcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


var lengthOfLongestSubstring = function(s) {
    if(s.length === 1) return 1;
    let i=0, map = new Map(), count = 0, startIndex=0, res=0;
    while(i <= s.length) {
      res = Math.max(res, count);
      if(map.has(s[i])) {
        elemIndex = map.get(s[i]);
        map.set(s[i], i);
        let j= elemIndex - 1;
        while(j >= startIndex) {
          map.delete(s[j])
          j--;
          count--;
        }
        startIndex = elemIndex + 1;
      } else {
        count++;
        map.set(s[i], i);
      }
      i++;
    }
    return res;
};

console.log(lengthOfLongestSubstring('au'))