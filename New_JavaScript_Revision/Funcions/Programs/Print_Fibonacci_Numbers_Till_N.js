
// let num =20;

// function fun(num){
//     let a = 0;
//     let b = 1;
//     let c;
//     for(let i = 2; i<num; i++){
//         a=b;
//         b=c;
//         c=a+b;
//         console.log(a);
//     }
// }
// fun(40);
let Number
function fun(Number){
    let a=0;
    let b=1;
    let c=1;
    for(let idx=0; idx<Number; idx++){
        a=b; 
        b=c;
        c=a+b;
    }
    console.log(a);
}
fun(10);