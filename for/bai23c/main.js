document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);

    for(i = 1; i <=n; i++){
        for(j = i; j <= n;j++){
            document.write('&nbsp;');   
        }
        for(k = i ; k >0; k--){
        document.write('*')
        console.log(k);
    }
        document.write('<br />');
}
} 

        for(i = n; i > 0; i--){
            for(j = i; j > 0; --j){
                document.write('&nbsp;&nbsp;');
                console.log(j);
            }
            for(k = i; k <= n; k++){
                document.write('*');
            }
            console.log('i='+i);
            document.write('<br />');
         }


