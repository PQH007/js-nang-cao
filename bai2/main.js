document.getElementById('btn-bac2').onclick = function(){
    var a = document.getElementById('a-t').value;
    var b = document.getElementById('b-t').value;
    var c = document.getElementById('c-t').value;
    var deltal = (b*b) - (4*a*c);
    if(deltal < 0 ){
        alert('pt vo nghiem');
    }
    if(deltal == 0){
        alert('pt co nghiem kep x1 = x2'+' = -b/2a ='+ (-b)/(2*a));
    }
    else{
        alert('pt 2 nghiem');
        alert('x1 = '+ (-b+(Math.sqrt(deltal)))/(2*a));
        alert('x2 = '+ (-b-Math.sqrt(deltal))/(2*a));
    }    
}