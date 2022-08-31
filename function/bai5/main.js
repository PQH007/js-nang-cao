function hamnhap(){
    nhanvien = '{"Name":"PQH","Age":18,"Sex":"Nam","Luong":1000,"Diem":8}';
    JSON.parse(nhanvien);
}

function hamxuat(){
    hamnhap();
    console.log(nhanvien);
}
hamxuat();

