let number = parseInt(prompt("Enter Any Number"));
let sum = 0;

function fun(num) {
  while (num > 0) {
    let temp = num % 10;

    sum = sum + temp * temp * temp;

    // Another Method
    // for (let idx = 1; idx <= temp; idx++) {
    // }

    num = parseInt(num / 10);
  }
  console.log(sum);
}

fun(number);
