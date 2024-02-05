// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"


var convert = function(s, numRows) {
  if(numRows === 1) return s;
  let res = [];
  let up = false;
  let level = 0;
  for(i=0; i< s.length; i++) {
      res[level] = !res[level] ? [] : res[level];
      res[level].push(s[i])
      if(level === numRows - 1) up = true;
      if(level ===  0) up = false;

      level = up ?  level-1 : level+1;
  }

  return res.reduce((acc, item) => acc+item.join(''), '')
};

console.log(convert('PAYPALISHIRING', 3))