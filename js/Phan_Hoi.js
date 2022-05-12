//hàm lấy phản hồi
function takePhanHoi(a, b) { //truyền mã khách hàng và mã chuyến đi
    var newReport, c;
    var arrReport = JSON.parse(localStorage.getItem('PhanHoi'));
    c = document.getElementById('idtakePhanHoi').value;
    if (c === "") {
        alert("Hãy nhập phản hồi");
        return false;
    } else {
        newReport = {
            IDCD: b,
            IDKH: a,
            detail: c
        };
        arruser.push(newReport);
        localStorage.setItem('PhanHoi', JSON.stringify(arrReport));
    }
}
//hàm này thì khai báo như hàm hủy chuyến đi thoi truyền đối số cũng y chang
function showPhanHoi() {
    var arrReport = JSON.parse(localStorage.getItem('PhanHoi'));
    var arrKH = JSON.parse(localStorage.getItem('KhachHang'));
    var arrTX = JSON.parse(localStorage.getItem('TaiXe'));
    var a, b, c;
    for (var i = 0; i < arrReport.length; i++) {
        a = arrTX[takeindexTX(arrCD[takeindexCD(arrReport[i].IDCD)].IDTX)].fullname; //tên tài xế
        b = arrKH[takeindexKH(arrReport[i].IDKH)]; //tên khách hàng
        c = arrReport[i].detail; // chi tiêt phản hổi
    }
}