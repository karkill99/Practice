// WAP Print_The_Sum_Of_Digits

let number = 12345;
let sum = 1;
while (number > 0) {
  sum = sum * (number % 10);
  number = parseInt(number / 10);
}

console.log(sum);

// let sum = 0;
// while (number > 0) {
//   sum = sum + (number % 10);
//   number = parseInt(number / 10);
// }
// console.log(sum);
