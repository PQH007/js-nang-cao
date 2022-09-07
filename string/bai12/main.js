document.getElementById('btn').onclick = function(){
    var tongA = 0;
    var tongB = 0;
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    for(i = 1;i <= a.split('').length;i++){
        tongA = tongA + 1;
    }
    for(j = 1;j <= b.split('').length;j++){
        tongB = tongB + 1;
    }

    if(tongA > tongB){
        console.log('Çhuoi A dai hon chuoi B');
    }
    else if(tongA  < tongB){
        console.log('Çhuoi A ngan chuoi B');
    }
    else{
        console.log('2 chuoi bang nhau');
    }
}