// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function(s, t) {

  let chatMap = new Array(26).fill(0);
  if(s.length != t.length) return false;

  let code = 'a'.charCodeAt();
  let i=0;
  while(i < s.length) {
      chatMap[s[i].charCodeAt() - code]++; 
      i++;
  }

  i=0;
  while(i < t.length) {
      chatMap[t[i].charCodeAt() - code]--; 
      i++;
  }



  return chatMap.every(item => item === 0);
};