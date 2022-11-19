let number = 1234567;
let sumOfNumber = 0;
let productOfNumber = 1;
// let temp = 0;
while (number > 0) {
  temp = number % 10;
  if (temp % 2 === 0) {
    sumOfNumber = sumOfNumber + temp;
  } else {
    productOfNumber = productOfNumber * temp;
  }
  number = parseInt(number / 10);
}

console.log(sumOfNumber);
console.log(productOfNumber);
