document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    for(var i = 2; i <= n ;i +=2){
        console.log(i);
    }
}
