document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    for(var i = 1; i <=n; i++){
        for(let j = 1;j<=i;j++){
            document.write('*');
        }
        document.write('<br />')
    }
} 