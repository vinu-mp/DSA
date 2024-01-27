// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function(s) {
  let i=1, stack = [s[0]];
  const match = {
      '}': '{',
      ')': '(',
      ']': '['
  }

  while(i < s.length) {
      if(!stack.length) {
          stack.push(s[i]);
      } else {
          if(stack[stack.length - 1] === match[s[i]])  stack.pop();
          else stack.push(s[i]);
      }

      i++;
  }
  return stack.length === 0;
};

console.log(isValid('()[]{}'))
