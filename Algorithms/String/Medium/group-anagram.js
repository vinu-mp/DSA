// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

var groupAnagrams = function(strs) {
  const strAry = strs.map(item => item.split('').sort().join(''))
  let i = 0, map={}, res=[];
  while(i < strAry.length) {
    const item = map[strAry[i]]
    if(item) {
      console.log(map[strs[i]])
      map[strAry[i]] = [...item, strs[i]]
    } else {
      map[strAry[i]] = [strs[i]]
    }
    i++;
  }

  return Object.values(map);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))