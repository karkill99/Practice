// WAP A Program To Print Factorial Of Given Number

let num = 0;

function Factorial(){
    let fact = 1;
    for(let i=2; i<=num; i++){
            fact = fact * i; 
        }
        console.log(fact);
    }  
    
Factorial();


// ********************************
// Taking input from user

let n = parseInt(prompt("Enter Any Number"));

function fact (){
    let facto = 1;
    for(let i = 2; i<=n; i++){
        facto = facto * i;
    }
    console.log(facto);
}

fact();
