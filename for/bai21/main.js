document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    for(var i = 0; i <n ; i++){      
        for(var j = 0 ; j < n ; j ++){
            if(j % 2 == 0){
                document.write('A'); 
            }
            else{
                document.write('B'); 
            }
        }
        document.write('<br />');

}
} 
