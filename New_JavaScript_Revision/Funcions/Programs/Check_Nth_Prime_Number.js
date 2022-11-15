let number = parseInt(prompt("Ener Any Number"));
let number2 = parseInt(prompt("Enter second number"));

let counter = 0;
for(let idx=0; idx<=number; idx++){
    
    if(fun(idx)){
        counter++;
        if(counter === number2){
            console.log(idx);
        }
    }
}
function fun(num){
    if(num<=1){
        return false;
    }
        
    for(let idx1=2; idx1<num; idx1++){
        if(num%idx1===0){
            return false;
        }
    }
    return true;
}