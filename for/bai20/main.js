document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    for(var i = 0; i <n ; i++){      
        if(i % 2 == 0){
            for(var j = 1; j < n;j++){
                document.write('A')
            }  
            document.write('A');
            document.write('<br />');
        }
        else{
            for(var j = 1; j < n;j++){
                document.write('B')
            }  
            document.write('B'); 
            document.write('<br />');
        }
    }
}
 
