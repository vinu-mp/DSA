// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

var letterCombinations = function(digits) {
    let n = digits.split('');
    let map = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz'
  }
    let num1 = map[n[0]], i=1, temp=[]
    if(n.length === 1) return map[n[0]].split('')
    while(i < n.length) {
      let num2 = map[n[i]]
      temp = [];
      for(k=0; k < num1.length; k++) {
        for(j=0; j< num2.length; j++) {
          temp.push(num1[k]+num2[j])
        }
      }
      num1 = [...temp];
      i++;
    }
   return temp;
};

console.log(letterCombinations('5678'))