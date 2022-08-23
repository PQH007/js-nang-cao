document.getElementById('btn').onclick = function(){
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    for(i = 0; i <= a; i++){
        if(a % i == 0 && b % i ==0){
            sum = i;
        }
    }
    console.log('UCLN = '+sum);
    BC = (a*b)/sum;
    console.log('BCNN = '+BC);
}
 
