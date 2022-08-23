document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    for(var i = 2; i <= n ;i +=2){
        if(i % 4 == 0){
            console.log(-i);
        }
        else{
            console.log(i);
        }
    }
}

