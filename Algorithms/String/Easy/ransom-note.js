// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

var canConstruct = function(ransomNote, magazine) {
  let map = {}, i=0;
  while( i < magazine.length) {
    if(map[magazine[i]]) {
      map[magazine[i]]++
    } else {
      map[magazine[i]] = 1
    }
    i++;
  }

  
  i=0;
  while( i < ransomNote.length) {
   if(map[ransomNote[i]]) {
    map[ransomNote[i]]--;
    console.log('here', ransomNote[i], map)
    !map[ransomNote[i]] && delete map[ransomNote[i]]
   }
   else return false
    i++;
  }
  return true;
};

console.log(canConstruct('aab', 'baa'))