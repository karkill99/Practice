let number = parseInt(prompt("Enter Any Number"));
let arm = 0;

function fun(num) {
  let org = num;
  while (num > 0) {
    temp = num % 10;
    arm = arm + temp * temp * temp;

    num = num / 10;
  }
  if (arm === org) {
    console.log("Number Is Armsrong");
  }

  console.log();
}

fun(number);
// console.log(fun(number));
