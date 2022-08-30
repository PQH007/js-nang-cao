function congPhanNguyen(a,b){
    var i = a / 10;
    var j = b /10;
    return parseInt(i)+parseInt(j); 
}
function congPhanNguyen(a,b,c){
    var i = a /10;
    var j = b /10;
    var v = c /10;
    return parseInt(i)+parseInt(j)+parseInt(v); 
}
alert(congPhanNguyen(52,40));
alert(congPhanNguyen(52,34,50));
