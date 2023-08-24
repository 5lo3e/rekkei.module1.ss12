let a=1;
let b=1;
while (((a%5)!=0)&&((b%5)!=0)) {
    a=b+a
    b=a+b
}
if (((a%5)==0)){
    console.log(a);
}
if(((b%5)==0)){
    console.log(b);
}   