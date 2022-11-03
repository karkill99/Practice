
let num =20;

function fun(){
    let a = 0;
    let b = 1;
    let c;
    for(let i = 2; i<num; i++){
        c=a+b;
        a=b;
        b=c;
        console.log(c);
    }
}
fun();