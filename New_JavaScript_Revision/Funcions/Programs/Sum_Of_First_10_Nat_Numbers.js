
// WAP program Sum of 10 naturals Numbers


function sumNumbers(){
    let sum = 0;
    for(let i =1; i<=10; i++){
        sum=sum+i;
    }
    console.log(sum);
}

sumNumbers();

// WAP program Sum of N naturals Numbers (User Input)

let n = prompt("Enter Number");

function sumNNumbers(){
    let sumOfN = 0;
    for(let i=1; i<=n; i++){
        sumOfN = sumOfN + i;
    }
    console.log(sumOfN);
}

sumNNumbers();