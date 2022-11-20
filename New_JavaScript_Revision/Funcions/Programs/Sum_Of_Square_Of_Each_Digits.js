let number = parseInt(prompt("Enter Any Numbers"));

let sum = 0;
while (number > 0) {
  temp = number % 10;

  sum = sum + temp * temp;

  number = parseInt(number / 10);
}

console.log(sum);
