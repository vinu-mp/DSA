// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

var addBinary = function(a, b) {
  let rem = 0, res='';
  if(a.length > b.length) {
    b = b.padStart(a.length, 0)
  } else {
    a = a.padStart(b.length, 0)
  }

  let  i = a.length - 1, j = b.length - 1;
  while(i >= 0) {
    console.log('here', i,j, a[i], b[j])
    if(a[i] === '1' && b[j] === '1') {
      res = (rem ? '1' : '0') + res;
      rem = 1;
    } else if(a[i] === '0' && b[j] === '0') {
      res = (rem ? '1' : '0') + res;
      rem = 0;
    } else {
      if(rem) {
        rem = 1;
        res = '0' + res;
      } else {
        res = '1' + res;
        rem = 0;
      }
    }
    console.log('ii',i,res);
    i--;
    j--;
  }
  console.log(res, a,b)
  return rem ? '1' + res : res;
}

console.log(addBinary('11', '1'))