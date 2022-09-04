var sum = 0;
document.getElementById('btn').onclick = function ketqua(){
    tinhgiaithua();
    document.write('ket qua = '+ sum);
}
function tinhgiaithua(){
    var n = document.getElementById('n').value;
    var giaithua = 1;
    for(var i = 1;i <= n;i++){
       if(i % 2 ==0 ){
        giaithua = giaithua * i;
       }
       sum = sum + giaithua;
    }
}
