// WAP A Program To Print Factorial Of Given Number

let num = 1;

function Factorial(){
    let fact = 1;
    for(let i=2; i<=num; i++){
            fact = fact * i; 
        }
        console.log(fact);
    }  
    
Factorial();
