// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"

// For every group of 2k characters, reverse the first k characters.

// Example:

// "onetwoten", k = 3

// we take the first group of 2k, or 6 chars: "onetwo"
// reverse the first k = 3 chars
// ignore the next k = 3 chars from this group: "eno" + "two"
// take the next group of 2k = 6 chars: "ten" (we only have 3 chars left, so take those)
// reverse the first k = 3 chars of the group: so "ten" becomes "net"
// result: "eno" + "two" + "net"

var reverseStr = function(s, k) {
   let start=0, end=k-1, window=2*k;
   let str = s.split('');
   while(start < s.length) {
    if(start < end) {
      let temp = str[end];
      str[end] = str[start];
      str[start] = temp;
      console.log('im here', temp)
      end--;
      start++;
    } else {
      start = window;
      end = start + (k-1);
      window += 2*k;
    }
   }

   return str.join('');
};

console.log(reverseStr('onetwoten', 3))
