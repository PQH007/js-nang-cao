document.getElementById('btn').onclick = function(){
    var n = parseInt(document.getElementById('n').value);
    var i = n;
    while( i <=n){
        if(i > 0){
            alert('n la so duong');
            break;
        }
        if(i <0){
            alert('nhap lai')
            break;
        }
        i--;
    }
    console.log(n)
}