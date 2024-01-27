function pow(x, n) {
  let ans=1,nn=Math.abs(n);
  while(nn != 0) {
    if(nn % 2) {
      ans*=x;
      nn--;
    } else {
      x = x*x;
      nn/=2;
    }
  }

  if(n < 0) {
    return 1/ans;
  }
  return ans;
}

console.log(pow(3,-7))