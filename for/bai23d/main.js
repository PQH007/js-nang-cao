document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
        for(i = n; i >0; i--){
            for(j = i; j > 0; --j){
                document.write('*');
                console.log(j);
            }
            for(k = i; k <= n; k++){
                document.write('&nbsp;&nbsp;');
            }
            console.log('i='+i);
            document.write('<br />');
         }
}
