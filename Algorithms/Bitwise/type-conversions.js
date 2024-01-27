const DecimalToBinary = (num) => {
  let i = 0, res = [];
  while (num > 0) {
    var digit = num & 1;
    num = num >> 1;
    res.push(digit)
  }
  return res;
}

console.log(DecimalToBinary(23))

// Binary to decimal

const binaryToDecimal = (num) => {
  let i=0, res=0;
    while(num > 0) {
      digit = num % 10;
      if(digit) {
        res += digit * 2**i
      }
      num = Math.floor(num/10);
      i++;
    }
  return res;
}

console.log(binaryToDecimal(101))