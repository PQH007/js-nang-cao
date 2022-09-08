document.getElementById('btn').onclick = function(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    if(a > b ){
        console.log('chuoi a lon hon b');
    }
    else if(a < b){
        console.log('chuoi a nho hon chuoi b');
    }
    else{
        console.log('2 chuoi bang nhau');
    }
}