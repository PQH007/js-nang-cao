document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    var sum = 0;
    for(var i = 0; i <= n ;i ++){
        sum = sum + i;
    }
    console.log('1/'+sum);
}

