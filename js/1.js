function setinfo() { //truyền vào mã người đang đăng nhập
    var a, b, c, d;
    var arrKH = JSON.parse(localStorage.getItem('KhachHang'));
    var arrTX = JSON.parse(localStorage.getItem('TaiXe'));

    var role = JSON.parse(localStorage.getItem('role'));
    var index = JSON.parse(localStorage.getItem('status'));

    a = document.getElementById('idnewname').value;
    b = document.getElementById('idnewpass').value;
    c = document.getElementById('idnewsdt').value;
    d = document.getElementById('idnewlinkcontact').value;

    if (role.localeCompare("KH") == 0) {
        tmp = index;
        if (a === "") {
            a = arrKH[tmp].fullname;
        }
        if (b === "") {
            b = arrKH[tmp].pass;
        }
        if (c === "") {
            c = arrKH[tmp].SDT;
        }
        if (d === "") {
            d = arrKH[tmp].linkcontact;
        }
        if (b.length < 6)
            thongbao("Mật khẩu ít nhất 6 ký tự");
        else if (c.length !== 10)
            thongbao("Số điện thoại không hợp lệ");
        else {
            arrKH[tmp].fullname = a;
            arrKH[tmp].pass = b;
            arrKH[tmp].SDT = c;
            arrKH[tmp].linkcontact = d;
            localStorage.setItem('KhachHang', JSON.stringify(arrKH));
            thongbao("Sửa thông tin thành công");
        }
    } else {
        tmp = index;
        if (a == "") {
            a = arrTX[tmp].fullname;
        }
        if (b == "") {
            b = arrTX[tmp].pass;
        }
        if (c == "") {
            c = arrTX[tmp].SDT;
        }
        if (d == "") {
            d = arrTX[tmp].linkcontact;
        }
        if (b.length < 6)
            thongbao("Mật khẩu ít nhất 6 ký tự");
        else if (c.length !== 10)
            thongbao("Số điện thoại không hợp lệ");
        else {
            arrTX[tmp].fullname = a;
            arrTX[tmp].pass = b;
            arrTX[tmp].SDT = c;
            arrTX[tmp].linkcontact = d;
            localStorage.setItem('TaiXe', JSON.stringify(arrTX));
            thongbao("Sửa thông tin thành công");
        }
    }
}

//hàm có sẵn trong file trước ông copy nội dung dán vào hàm chỗ cũ (nếu có copy toàn bộ file trước
// tại hàm cũ điều kiện sai
function checkuserKH(a) {
    if (a.slice(0, 2) !== 'KH')
        return 1;
    var arruser = JSON.parse(localStorage.getItem('KhachHang'));
    for (var i = 0; i < arruser.length; i++) {
        if (a === arruser[i].IDKH)
            return 2;
    }
    return 0;
}
//hàm có sẵn trong file trước ông copy nội dung dán vào hàm chỗ cũ (nếu có copy toàn bộ file trước
// tại hàm cũ điều kiện sai 
function checkuserTX(a) {
    if (a.slice(0, 2) !== 'TX')
        return 1;
    var arruser = JSON.parse(localStorage.getItem('TaiXe'));
    for (var i = 0; i < arruser.length; i++) {
        if (a === arruser[i].IDTX)
            return 2;
    }
    return 0;
}
//hàm show chuyến đi bởi TX giống vơi của khách hàng
function showTripbyTX(A) { //truyền mã người dùng đang đăng nhập
    var arrCD = JSON.parse(localStorage.getItem('ChuyenDi'));
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));
    var arrTD = JSON.parse(localStorage.getItem('TuyenDuong'));

    var string = '';
    var string2 = '';
    var a, b, c, d, e;

    for (var i = 0; i < arrCD.length; i++) {
        if (A === arrCD[i].IDTX) {
            a = arrTD[takeindexTD(arrCD[i].IDCD)].TGBD;
            b = 'Thứ ' + arrTD[takeindexTD(arrCD[i].IDCD)].NgayBD;
            c = takeCTTD(arrCD[i].IDCD);
            //ở trên là hàm của ông tui copy sang tui chỉ thêm biến d và e v 
            //biến d lưu thông tin tài xế
            d = takeinfoTX(arrCD.IDTX);
            //biến e lưu thông tin xử lý chuyến đi
            // KH vs TX:
            //  0    0  = khách hủy chuyến
            //  1    1  = chuyến đi thực hiện bình thưuòng
            //  1    0  = tài xế có chuyến khác hoặc tài xế hủy chuyến
            // biến phụ lưu mã khách hàng với mã chuyến đi của ChiTietChuyenDi nếu có 
            var tmpE1 = arrCTCD[takeindexCTCD(arrCD[i].IDCD)].IDKH; //mã KH
            var tmpE2 = arrCD[i].IDCD; //mã CD
            e = takedecision2_0(tmpE1, tmpE2);
            //cột 5 là cột select option nha khi hiện ra là có 2 option 
            // option chính là cái e còn option phụ là "hủy chuyến đi" 
            // khi chọn option "hủy chuyến đi " gọi hàm (setflagTX(tmpE1,tmpE2))
        }
    }
}
//hàm lấy thông tin khách hàng theo mã khách hàng
function takeinfoKH(a) { //truyền vào mã khách hàng
    var arrKH = JSON.parse(localStorage.getItem('KhachHang'));
    var i;
    for (i = 0; i < arrKH.length; i++) {
        if (a === arrKH[i].ID)
            break
    }
    var a, b, c;
    a = arrKH[i].fullname;
    b = arrKH[i].SDT;
    c = arrKH[i].linkcontact;
    return "<li>" + a + "</li> <li>" + b + "</li> <li>" + c + "</li>";
}
//hàm lấy index trong ChiTietChuyenDi 
function takeindexCTCDbyTX(a) { // truyền mã CD
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));
    var i;
    for (i = 0; i < arrCTCD.length; i++) {
        if (a === arrCTCD[i].IDCD)
            break;
    }
    return i;
}
//Lấy quyết định version 2.0
function takedecision2_0(a, b) { // truyền vào mã khách hàng và mã chuyến đi
    flagcheck = checkflagbyKH(a, b);
    if (flagcheck === 1) {
        return "Chuyến đi đã kiểm duyệt";
    } else if (flagcheck === 2)
        return "Khách hoặc bạn đã hủy chuyến";
    else if (flagcheck === 0)
        return "Bạn đã có chuyên tương tự";
    else
        return "Chưa có khách đặt";
}
//hàm hủy chuyến đi của KH chỉ cho phép sửa 1 thành 0 và không cho phép ngược lại
function setflagTX(a, b) { //truyền vào mã khách hàng và mã chuyến đi
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));
    for (var i = 0; i < arrCTCD.length; i++) {
        if (a === arrCTCD[i].IDKH && b === arrCTCD[i].IDCD) {
            arrCTCD[i].FlagTX = 0;
            break;
        }
    }
    localStorage.setItem('ChiTietChuyenDi', JSON.stringify(arrCTCD));
    showTripbyTX(a);
}