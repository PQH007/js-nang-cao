document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    var i = 1;
    do{
        document.write('&nbsp;');
        var j =1;
        do{
            document.write('*');
            j++
        }while(j <=i)
        document.write('<br />')
        i++
    }while(i <= n);
}