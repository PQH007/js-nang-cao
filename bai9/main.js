document.getElementById('btn').onclick = function(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = '';
    c = a;
    a = b ; 
    b = c ;

    console.log("a'="+a+",b'="+b);
}