nhanvien = [
    {"Name":"PQH","Age":18,"Sex":"Nam","Luong":1000,"Diem":8},
]
document.getElementById('btn').onclick = function hamxuat(){
    hamnhap();
    console.log(nhanvien);
}


function hamnhap(){
    nhanvien.push(document.getElementById('nv').value);
}

