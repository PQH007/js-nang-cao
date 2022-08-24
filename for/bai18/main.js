document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    var gt = 1;
    var sum = 0;
    var tinhN = 0;
    for (var i = 1;i <= n; i++){
            tinhN = (2*i -1);
        for(var j = 1; j <= tinhN; j++){
            gt = gt * j;
        }
        console.log(tinhN)
        console.log('+'+sum)

    }
}
 
