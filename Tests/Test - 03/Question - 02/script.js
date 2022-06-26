// Q 2. In how many ways can we loop in an array describe each with an example ?
// Following ways to loop through an array in JavaScript 

/* 1. for Loop
The basic for loop has the following syntax: */

/* for (initialization; condition; update statement) {
     code block to be executed
} */

// Example :-

var myArray = [
    {id: 1, name: 'Kartik', age: 12},
    {id: 2, name: 'Pratik', age: 14},
    {id: 3, name: 'Manish', age: 13},
    {id: 4, name: 'Mahesh', age: 17},
    {id: 5, name: 'Babu', age: 11}
];

for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i].name);
}

/*
Output:
    Kartik
    Pratik
    Manish
    Mahesh
    Babu
*/
// ********************************************

/* 2. while Loop
The basic while loop has the following syntax:

while (condition) {
    // code block to be executed
} */

// Example :-

var myArray = [
    {id: 1, name: 'Kartik', age: 12},
    {id: 2, name: 'Manish', age: 14},
    {id: 3, name: 'Pratik', age: 13},
    {id: 4, name: 'Mahesh', age: 17},
    {id: 5, name: 'babu', age: 11}
];

var i = 0;
while(i < myArray.length) {
    console.log(myArray[i].name)
    i++
}

/*
Output:
  Kartik
  Manish
  Pratik
  Mahesh
  babu
*/
// ******************************************
/* 3. do/while Loop
The do/while loop is in fact very similar to while loop. The only difference is that do/while loop will be triggered 
at least once regardless of the condition.

The basic do/while loop has the following syntax:

do {
    // code block to be executed
} while (condition) */

// Example : -

var myArray = [
    {id: 1, name: 'kartik', age: 12},
    {id: 2, name: 'Pratik', age: 14},
    {id: 3, name: 'Manish', age: 13},
    {id: 4, name: 'Mahesh', age: 17},
    {id: 5, name: 'Babu', age: 11}
];

var i = 0;
do {
    console.log(myArray[i].name)
    i++
} while(i < myArray.length)
  
/*
Output:
  kartik
  Pratik
  Manish
  Mahesh
  Babu
*/

// // There are also more methodes like map, forEach, for/of Loop which carries for complex structred loop
     
