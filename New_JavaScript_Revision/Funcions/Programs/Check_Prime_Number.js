// WAP A Program To Check A Number Is Prime Or Not

let num=5;

function checkPrimeOrNot(){
    for(let i=2; i<num; i++){
        if(i%num===0){ 
        console.log("Num Is Not Prime");
    }else {
        console.log("Num Prime");
    }
}
}

checkPrimeOrNot();