document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    var k = 0;
        for(var i = n; i >= 1; i--){
            for(var j = i; j <= n ; j++){
                document.write('&nbsp;&nbsp;');
                console.log(j)
            }
            for(var k = i;k <=(2*i)-1;k++) {
                document.write("* ");
             }
             for(var k = 0; k < i -1; k++){
                document.write("* ");
             }
            document.write('<br />');
         }
         
}
