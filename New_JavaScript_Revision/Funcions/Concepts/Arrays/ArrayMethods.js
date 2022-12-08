// Array Operations

//1. push
//2. pop
//3. shift
//4. unshift

/************************************************/
// push operation
// let arr = [1, 2, 3, 4, 5, 6, 7];

// function sum(param) {
//   let sum = 0;

//   // Getting The Sum
//   for (let i = 0; i < param.length; i++) {
//     sum = sum + arr[i];
//   }

//   // Append The Sum
//   arr.push(sum);
//   return arr;
// }
// console.log(sum(arr)); // Arguments

/************************************************/
// pop operation

// let arr1 = [1, 2, 3, 4, 5, 6, 7];

// let res = popOperation(arr1);

// function popOperation(arr1) {
//   arr1.pop();
//   return arr1;
// }

// console.log(res);

/************************************************/
// Shift Operation
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr.length);
// let res = shifting(arr);
// function shifting(arr) {
//   arr.shift();
//   return arr;
// }
// console.log(res);
// console.log(arr.length);

/************************************************/
// UnShift Operation

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// unShifting(arr);

// function unShifting(arr) {
//   arr.unshift(4);
//   return arr;
// }
// console.log(arr);

/************************************************/
// Delete The Middle Element
// let arr1 = [1, 2, 3, 4, 5, 6, 7];

// let l = arr1.length;
// let middle = parseInt((l - 1) / 2);

// console.log("Deleted Element " + arr1[middle]);
// for (let i = middle; i < l - 1; i++) {
//   arr1[i] = arr1[i + 1];
// }

// arr1.pop();
// console.log(arr1);

/********************/
// Delete The Middle Element Using Slice
// let str = arr1.length / 2;
// console.log(str);
// arr1.splice(str, 1);
// console.log(arr1);

/************************************************/

var x = 21;
var y = function () {
  console.log(x);
  var x = 20;
};
y();
