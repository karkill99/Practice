'use strict';


// let sayMyName = function() {

//     console.log("Hiesenberg");
// }

// console.log(sayMyName());
// // sayMyName();



// ************************function Expression *******************



// let sum2Num = function(x,y){
//     z = x+y;
//     return z;
// }
// let sumTwo = sum2Num;
// console.log(sumTwo(8,8));



// ************************ Function Declaration ******************


// function myName (a,b){
    
//     return a+b;
    
// }
// console.log(myName(8,8));
// myName();

// ************************ Diff Between Function Declration Function Expression


// Function Declration

// let age = 12;


// if(age >18) {
//     function isEligible() {
//         console.log("Yes");
//     }
//     isEligible();
    
// } else {
//     function isEligible() {
//         console.log("No");
//     }
//     isEligible();
// }

// isEligible();

// *****************************Function Expression *******************

// let age = 20
// let isEligible;


// if(age>18){
//     isEligible = function() {
//         console.log("Yes");
//     }
//     isEligible();
// } else {
//     isEligible = function() {
//         console.log("No");
//     }
//     isEligible();
// }
// isEligible();

// **************************************

// let op = '+';
// // let add;
// // let mul;

// if(op == '+'){
//     function add(a,b){
//         console.log(a+b);
//     }
// } else {
//     function mul(a,b){
//         console.log(a*b);
//     }
// }

// add(4,3);
// mul(4,3);

//********************************************** 

// function num (){
//     console.log("Hi There");
// }

// console.log(num);

// let a = function(){
//     console.log("my Name Is Hiesenberg");
// }

// console.log(a);
// **********************************************

// console.log(a);
// let a = 10;
// console.log(a);

// ********************* 

// console.log(b);
// var b= 10;
// console.log(b);

//*************************** 

// console.log(a);
// let a = function() {
//     console.log("Yes");
// }
// console.log(a);
// // console.log(a());

//******************************************** */
let a = 16;
let sum;
let mul;
if(a>18){
     sum = function(){
        console.log("I Am Addition");
    }
    
} else{
     mul = function(){
        console.log("I Am Multiplication");

    }
}

// sum();
mul();
// console.log(mul());

//******************************************** */
// let b = 20;

// if(b>18){
//       function sum(){
//         console.log("I Am Addition");
//     }
//     // sum();
    
// } else{
//      function mul(){
//         console.log("I Am Addition");
//     }
//     // mul();
// }

// console.log(sum());
