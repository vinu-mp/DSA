// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


var isAnagram = function(s, t) {
  let sourceMap = new Map();
  let i = 0;
  if(s.length !=t.length) return false;
  while(i < s.length) {
    if(sourceMap.has(s[i])) {
      let val =  sourceMap.get(s[i]);
      sourceMap.set(s[i], val+1);
    } else {
      sourceMap.set(s[i], 1)
    }
    i++;
  }

  i=0;
  while(i < t.length) {
    if(sourceMap.has(t[i])) {
      let val =  sourceMap.get(t[i]);
      sourceMap.set(t[i], val - 1);
      if(val - 1 < 0) return false;
    } else {
      return false;
    }
    i++
  }
  return true;
}

console.log(isAnagram('aacc', 'ccac'))