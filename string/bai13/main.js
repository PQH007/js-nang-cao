document.getElementById('btn').onclick = function(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var n = a.includes(b);
    if(!n){
        console.log('b khong phai la chuoi con cua a');
    }
    else{
        console.log('b chuoi con cua a');
    }
}