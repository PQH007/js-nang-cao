document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    var i = 0;
    var a = 0;
    var k;
    while( i <= n){
        if(a % 2 == 0){
            console.log(-k);
            }
        else{
            console.log(k);
            }
            k = i + Math.pow(2,a);
            a++;
            i = k;
       
    }

}
 
