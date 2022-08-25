document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    for(var i = 0; i <=n ; i++){
            if(i == n){
                for(j = 1; j <=n; j++)
                document.write('*');
            }
            else{
                for(j = 0; j <=n; j = j + n) {
                    document.write('*');
                    for(k = 0 ; k <=n ; k++){
                        document.write('&nbsp;');
                    }
                }
            }
        document.write('<br />');
}
} 