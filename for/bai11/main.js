document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    var i = 1 ;
    var k;
    while( i <= n){
        console.log(k);
        k = i*2 + 1;
        i = k;
    }
}
 
