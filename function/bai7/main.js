

document.getElementById('btn').onclick = function tinhgiaithua(){
    var n = document.getElementById('n').value;
    for(var i = 1;i <= n;i++){
        var giaithua = 1;
         giaithua = giaithua * i;
    }
    console.log(giaithua);
}

