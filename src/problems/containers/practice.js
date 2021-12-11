//A positive integer is magical if it is divisible by either a or b.

//Given the three integers n, a, and b, return the nth magical number. Since the answer may be very large, return it modulo 10^9 + 7

const nthMagicalNumber = (n, a, b) => {
  let count = 0;
  let numa = 0;
  let numb = 0;
  let num = 0;
  if (a > b) {
    [a, b] = [b, a];
  }


  while (count < n) {
    if (numa <= numb) {
      numa+=a;
      count++;
      num=numa;
      if (numb <= numa) {
        if (count === n) {
          return numa % 1000000007;
        }
        numb+=b;
        count++;
        num=numb;
      }
    }else if (numb <= numa) {
      numb+=b;
      count++;
      num=numb;
      if (numa <= numb) {
        if (count === n) {
          return numb % 1000000007;
        }
        
        numa+=a;
        count++;
        num=numa;
      }
    } 
  }
  return num % (Math.pow(10, 9) + 7);
};
