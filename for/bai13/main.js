document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    var val;
    var sum = 0;
    var mul = 1;
    while(n){
        val = n %10;
        sum = sum + val;
        mul = mul * val;
        n = Math.floor(n/10);
    }
    console.log('tong n = '+sum);
    console.log('tich n = '+mul);
}
 
