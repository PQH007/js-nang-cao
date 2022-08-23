document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    for(var i = 1 ; i <= n ;i +=2){
        console.log(i);
    }
}

document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    for(var i = 1 ; i <= n ;i ++){
        if(i % 2 != 0){
        console.log(i);
        }
    }
}