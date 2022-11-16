// WAP to print sum of digits
let number = 21321;

fun(number);

function fun(number){
    let sum = 0;
    while(number>0){
        sum = sum + number%10;
        number = parseInt(number/10);
    }
    console.log(sum);

}

// function fun(number){
//     let sum = 0;
//     for(let idx=0; idx<number; idx++){
//         sum = sum + number%10;
//         number = parseInt(number/10);
//     }
//     console.log(sum);

// }