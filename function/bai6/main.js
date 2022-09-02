var Name;
var age;
var sex;
var luong;
var diem;
var nhanvien = [
    {"Name":"PQH","Age":18,"Sex":"Nam","Luong":1000,"Diem":8},
]
document.getElementById('btn').onclick = function hamxuat(){
    hamnhap();
    if(confirm('ban co muon nhap nhan vien tiep theo khong')){
        console.log('');
    }
    else{
    console.log(nhanvien);
    }
}
function hamnhap(){
    nhanvien.push({
        "Name":Name = document.getElementById('N').value
        ,"Age":age = document.getElementById('diem').value
        ,"Sex":sex = document.getElementById('diem').value
        ,"Luong":luong = document.getElementById('luong').value
        ,"Diem":diem = document.getElementById('diem').value
    });
}

