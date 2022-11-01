// WAP a program to print all prime numbers upto N

let n = parseInt(prompt("Enter Any Number"));
for(let i= 1; i<=n; i++){
    if(fun(i)){
        console.log(i);
    }
}

function fun(number){
    if(number<=1){
        return false;
    }

    for(let i=2; i<number/2; i++){
        if(number%i === 0){
            return false;
        }
    }
    return true;
}