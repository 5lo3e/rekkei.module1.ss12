let count=0
while(count<3){
    do{
        let a=+prompt(" Nhập thẻ cào muốn chọn");
        ++count
    
        if ((0>a)||(a>6)) {
            alert("Yêu cầu nhập lại");
            console.log("Nhập lại");
            --count
            break;
        }
        console.log(a);
        console.log(count);
    }while((count<3));
    
}





