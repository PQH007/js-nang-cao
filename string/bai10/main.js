document.getElementById('chuoi').onchange = function(){
    var a = document.getElementById('chuoi').value;
    var n = document.getElementById('n').value;
    var m = document.getElementById('m').value;
    var b = a.split('').reverse().join('');
    console.log('chuoi dao nguoc: ' + b);
    console.log('chuoi in hoa '+a.toUpperCase());
    console.log('chuoi thuong '+a.toLowerCase());
    console.log('in ra tu n - m: '+ a.substring(n,m)); // slice
}