// Reversing The Array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reverseTheArray() {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

reverseTheArray(arr);
