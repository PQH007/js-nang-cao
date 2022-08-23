document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    var i = 1;
    // while(i <= n){
    //     console.log(i);
    //     i +=2;
    // }
    while(i <= n){
        if(i % 2 != 0){
            console.log(i);
        }
        i ++;
    }
}


