function bai2(a,b,c,sum){
    for(i = 0; i <=a ; i++){
        if(a % i == 0 && b % i ==0 && c % i ==0){
            sum = i;
        }
    }
    return 'UCLN  '+ sum;
}
alert(bai2(5,20,60))