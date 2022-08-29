document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    var i = 1;
    do{
        // console.log(i);
        var j =1;
        while(j <= n){
            console.log(i+'-'+j);
            j++
        }
        i++
    }while(i <= n);

}