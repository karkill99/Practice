// Array Operations
// push
// pop
// shift
// unshift

// push operation
let arr = [1, 2, 3, 4, 5, 6, 7];

function sum(param) {
  let sum = 0;

  // Getting The Sum
  for (let i = 0; i < param.length; i++) {
    sum = sum + arr[i];
  }

  // Append The Sum
  arr.push(sum);
  return arr;
}

console.log(sum(arr)); // Arguments
