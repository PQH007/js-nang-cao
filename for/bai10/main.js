document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    var i = 0;
    var s = 1;
    var k;
    while(i <=n){
        console.log(i);
        k = i + s ;
        i = s;
        s = k;
    }
}
 
