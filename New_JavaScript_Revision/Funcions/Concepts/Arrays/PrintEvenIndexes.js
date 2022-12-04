// Print Even Indexces

// Optimized Approach

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i = i + 2) {
  console.log(arr[i]);
}

// Not Optimised Approach

for (let i = 0; i < arr.length; i = i + 2) {
  if (i % 2 === 0) {
    console.log(arr[i]);
  }
}
