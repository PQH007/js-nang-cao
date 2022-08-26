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
