document.getElementById('btn').onclick = function(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    if (a === b){
        console.log('a bang b');
    }
    else{
        console.log('a khac b');
    }
}
