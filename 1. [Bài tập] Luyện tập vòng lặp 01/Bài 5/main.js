let a=0;
let b=1;
let result=0;
for(let i= 1;i<=10;i++){
    result=a+b
    console.log(a);
    console.log(b);
    a=b+a;
    b=a+b
}
console.log(result);