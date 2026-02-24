function maxProduct(a) {
  let b =a.sort((x,y)=>x-y);

  let n=b.length;
  let d=(b[n-1]*b[n-2]);

  return d;
}

console.log(maxProduct([1,5,3,7,8]));

function maxProduct(arr) {
  let biggest = 0;
  let secondBiggest = 0;

  for (let num of arr) {
    if (num > biggest) {
      secondBiggest = biggest; 
      biggest = num;
    } else if (num > secondBiggest) {
      secondBiggest = num;
    }
  }

  return biggest * secondBiggest;
}
