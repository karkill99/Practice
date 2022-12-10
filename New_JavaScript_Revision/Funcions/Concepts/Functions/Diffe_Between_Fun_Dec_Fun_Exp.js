// 'use strict';
let num = 16;
let sum;
let mul;
if (num > 18) {
  sum = function () {
    console.log("I Am Addition");
  };
} else {
  mul = function () {
    console.log("I Am Multiplication");
  };
}

// sum();
mul();
// console.log(mul());

//*********************************************/
let b = 16;

if (b > 18) {
  function Sum() {
    console.log("I Am Addition");
  }
  // sum();
} else {
  function multi() {
    console.log("I Am Multiplication");
  }
  // mul();
}

multi();
console.log(Sum());
console.log(multi());
multi();
