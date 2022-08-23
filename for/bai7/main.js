document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    var s = 1;
    for(var i = 1; i <= n ;i ++){
        s = s * i;
    }
    console.log(s)

}


