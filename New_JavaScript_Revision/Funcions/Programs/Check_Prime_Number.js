// WAP A Program To Check A Number Is Prime Or Not
// let num = parseInt(prompt("Enter Any Number"));
// // let num=1;
// function checkPrimeOrNot(){
//     // if(num<=1){
//     //     return false;
//     // }
//     for(let i=2; i<num; i++){
//         if(num%i===0){
//             return false;
//         }
//     }    
//     return true;
// }
// // checkPrimeOrNot();
// if(checkPrimeOrNot() === true){
//     console.log("Num Is Prime");
// } else {
//     console.log("Num Is Not Prime");
// }

//*************************************** */

let num = 1;
function fun (){
    for(let i=2; i<num; i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}

if(fun()=== true){
    console.log("Num is Prime");
} else {
    console.log("Num is Not Prime");
}