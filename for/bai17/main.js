document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    var gt = 1;
    var sum = 0;
    for (var i = 1; i <= n; i++){
        gt = gt * i;
        sum = sum + gt;
    }
    console.log('1/'+sum)
}
 
