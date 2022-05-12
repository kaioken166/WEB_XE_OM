//hàm xóa khách hàng
function deleteKH(a) { // truyền vào mã khách hàng
    var arrKH = JSON.parse(localStorage.getItem('KhachHang'));
    var i;
    for (i = 0; i < arrKH.length; i++) {
        if (arrKH[i].ID === a) {
            if (confirm("Bạn có muốn xóa khách hàng này?\n (Những dữ liệu liên quan cũng sẽ mất theo)")) {
                delCTCDbyKH(a);
                arrKH.splice(i, 1);
                thongbao("Xóa thành công");
                break;
            }
        }
    }
    localStorage.setItem('KhachHang', JSON.stringify(arrKH));
    changeInnerWeb('quanlyKhachHang');
}

//hàm xóa chi tiết chuyến đi khi xóa KH
function delCTCDbyKH(a) { //truyền mã khách hàng
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));
    var i;
    for (i = arrCTCD.length - 1; i >= 0; i--) {
        if (arrCTCD[i].IDKH == a) {
            arrCTCD.splice(i, 1);
        }
    }
    localStorage.setItem('ChiTietChuyenDi', JSON.stringify(arrCTCD));
}

//hàm xóa tài xế
function deleteTX(a) { // truyền vào mã Tài xế
    var arrTX = JSON.parse(localStorage.getItem('TaiXe'));
    var i;
    for (i = 0; i < arrTX.length; i++) {
        if (arrTX[i].ID === a) {
            if (confirm("Bạn có chắc xóa tài xế này?\n (Những dữ liệu liên quan cũng sẽ mất theo)")) {
                delCDbyTX(a);
                arrTX.splice(i, 1);
                thongbao("Xóa thành công");
                break;
            }
        }
    }
    localStorage.setItem('TaiXe', JSON.stringify(arrTX));
    changeInnerWeb('quanlyTaiXe');
}

//hàm xóa chuyến đi khi xóa TX
function delCDbyTX(a) { //truyền vào mã Tài xế
    var arrCD = JSON.parse(localStorage.getItem('ChuyenDi'));
    var i;
    for (i = arrCD.length - 1; i >= 0; i--) {
        if (arrCD[i].IDTX === a) {
            delCTCDbyTX(arrCD[i].IDCD);
            delTDbyTX(arrCD[i].IDCD);
            arrCD.splice(i, 1);
        }
    }
    localStorage.setItem('ChuyenDi', JSON.stringify(arrCD));

}

//hàm xóa tuyến đường
function delTDbyTX(a) { //truyền vào mã chuyến đi
    var arrTD = JSON.parse(localStorage.getItem('TuyenDuong'));
    var i;
    for (i = arrTD.length - 1; i >= 0; i--) {
        if (arrTD[i].IDCD === a) {
            delCTTD(arrTD[i].IDTD);
            arrTD.splice(i, 1);
        }
    }
    localStorage.setItem('TuyenDuong', JSON.stringify(arrTD));
}

//hàm xóa tất cả tuyến đường bằng mã tuyến đường
function delCTTD(a) { //truyền vào mã tuyến đường
    var arrCTTD = JSON.parse(localStorage.getItem('ChiTietTuyenDuong'));
    var i;
    for (i = arrCTTD.length - 1; i >= 0; i--) {
        if (arrCTTD[i].IDTD === a) {
            arrCTTD.splice(i, 1);
        }
    }
    localStorage.setItem('ChiTietTuyenDuong', JSON.stringify(arrCTTD));
}

//hàm xóa chi tiết chuyến đi
function delCTCDbyTX(a) { //truyền mã chuyến đi
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));
    var i;
    for (i = arrCTCD.length - 1; i >= 0; i--) {
        if (arrCTCD[i].IDCD == a) {
            arrCTCD.splice(i, 1);
        }
    }
    localStorage.setItem('ChiTietChuyenDi', JSON.stringify(arrCTCD));
}

//hàm xóa chuyến đi bình thường
function delCD(a) { //truyền mã chuyến đi
    var arrCD = JSON.parse(localStorage.getItem('ChuyenDi'));
    var i;
    for (i = 0; i < arrCD.length; i++) {
        if (arrCD[i].IDCD == a) {
            if (confirm("Bạn có chắc xóa Chuyến Đi này?")) {
                delTDbyTX(arrCD[i].IDCD); //xài lại hàm xóa tuyến đường của tài xế
                delCTCDbyTX(arrCD[i].IDCD);
                arrCD.splice(i, 1);
                thongbao("Xóa thành công");
                break;
            }
        }
    }
    localStorage.setItem('ChuyenDi', JSON.stringify(arrCD));
    changeInnerWeb('quanlyChuyenDi');
}

//hàm xóa tuyến đường bình thưuòng
function delTD(a) { //truyền vào mã tuyến đường
    var arrTD = JSON.parse(localStorage.getItem('TuyenDuong'));
    var i;
    for (i = arrTD.length; i >= 0; i++) {
        if (arrTD[i].IDTD === a) {
            if (confirm("Bạn có chắc xóa này ")) {
                delCTTD(arrTD[i].IDTD);
                arrTD.splice(i, 1);
            }
        }
    }
    localStorage.setItem('TuyenDuong', JSON.stringify(arrTD));
}