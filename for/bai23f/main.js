document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    var k = 0;
        for(var i = 1; i <= n; ++i,k = 0){
            for(var j = i; j <=n ; j++){
                document.write('&nbsp;&nbsp;');
            }
            while (k != (2 * i) - 1) {
                document.write("* ");
                ++k;
             }
            document.write('<br />');
         }
         
}
