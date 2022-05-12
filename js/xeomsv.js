///Tạo tài khoản theo khách hàng
function crnewuserbyKH() {
    var newuser, a, b, c, d, e, f;
    a = document.getElementById('idSignUpname').value; //chỗ nhập tên trong html ở dưới tương tự
    b = document.getElementById('idSignUpuser').value;
    b = 'KH' + b;
    console.log(b);

    c = document.getElementById('idSignUppass').value;
    d = document.getElementById('idSignUppass1').value;
    e = document.getElementById('idSignUpsdt').value;
    f = document.getElementById('idSignUplinkcontact').value;
    if (a == "") {
        thongbao("Hãy nhập tên");
        return false;
    } else if (b == "") {
        thongbao("Hãy nhập tên đăng nhập");
        return false;
    } else if (c == "") {
        thongbao("Hãy nhập mật khẩu");
        return false;
    } else if (d != c) {
        thongbao("Mật khẩu không trùng khớp");
        return false;
    } else if (checkuserKH(b) == 1)
        thongbao("Tài khoản phải bắt đầu bằng KH");
    else if (checkuserKH(b) == 2) {
        thongbao("Tài khoản đã tồn tại");
        return false;
    } else if (c.length < 6) {
        thongbao("Mật khẩu ít nhất 6 chữ số");
        return false;
    } else {
        arruser = JSON.parse(localStorage.getItem('KhachHang'));
        newuser = { ID: b, pass: c, fullname: a, SDT: e, linkcontact: f };
        arruser.push(newuser);
        localStorage.setItem('KhachHang', JSON.stringify(arruser));
        thongbao("Đăng kí thành công");
        thongbao("Tài khoản của bạn là " + b + "<br>Vui lòng ghi nhớ để tránh sai sót khi đăng nhập.");
        setTimeout(`location.reload()`, 2500);
    }
}
//kiểm tra ký tự đầu KH và có trùng hay không
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
//tạo tài khoản theo tài xế
function crnewuserbyTX() {
    var newuser, a, b, c, d, e, f;
    a = document.getElementById('idSignUpname').value;
    b = document.getElementById('idSignUpuser').value;
    b = 'TX' + b;
    console.log(b);
    c = document.getElementById('idSignUppass').value;
    d = document.getElementById('idSignUppass1').value;
    e = document.getElementById('idSignUpsdt').value;
    f = document.getElementById('idSignUplinkcontact').value;


    if (a == "") {
        thongbao("Hãy nhập tên");
        return false;
    } else if (b == "") {
        thongbao("Hãy nhập tên đăng nhập");
        return false;
    } else if (c == "") {
        thongbao("Hãy nhập mật khẩu");
        return false;
    } else if (d != c) {
        thongbao("Mật khẩu không trùng khớp");
        return false;
    } else if (checkuserTX(b) == 1)
        thongbao("Tài khoản phải bắt đầu bằng TX");
    else if (checkuserTX(b) == 2) {
        thongbao("Tài khoản đã tồn tại");
        return false;
    } else if (c.length < 6) {
        thongbao("Mật khẩu ít nhất 6 chữ số");
        return false;
    } else {
        arruser = JSON.parse(localStorage.getItem('TaiXe'));
        newuser = { ID: b, pass: c, fullname: a, SDT: e, linkcontact: f };
        arruser.push(newuser);
        localStorage.setItem('TaiXe', JSON.stringify(arruser));
        thongbao("Đăng kí thành công");
        thongbao("Tài khoản của bạn là " + b + "<br>Vui lòng ghi nhớ để tránh sai sót khi đăng nhập.");
        setTimeout(`location.reload()`, 2500);
    }
}
//giống với hàm kiểm tra bên khách hàng
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
//chiếu chuyến đi cho khách hàng
function showKHCD() {
    var arrCD = JSON.parse(localStorage.getItem('ChuyenDi'));
    var arrTD = JSON.parse(localStorage.getItem('TuyenDuong'));

    var string = '';
    var string2 = '';
    var a, b, c;
    for (var i = 0; i < arrCD.length; i++) {
        a = arrTD[takeindexTD(arrCD[i].IDCD)].TGBD;
        b = 'Thứ ' + arrTD[takeindexTD(arrCD[i].IDCD)].NgayBD;
        c = takeCTTD(arrCD[i].IDCD);
        string += '<tr><th scope="row">' + a + '</th>' + '<td>' + b + `</td>
            <td>
                <div class="dropdown">
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="" data-bs-toggle="dropdown" aria-expanded="false">
                        Chi tiết
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="">
                        ` + c + `
                    </ul>
                </div>
            </td>
            <td><button type="button" class="btn btn-primary" onclick="KHselect('` + arrCD[i].IDCD + `')">Chọn</button></td>
        <tr>`;
        string2 += '<tr><th scope="row">' + a + '</th>' + '<td>' + b + `</td>
            <td>
                <div class="dropdown">
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="" data-bs-toggle="dropdown" aria-expanded="false">
                        Chi tiết
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="">
                        ` + c + `
                    </ul>
                </div>
            </td>
            <td><button type="button" class="btn btn-primary" onclick="KHselect('` + arrCD[i].IDCD + `')" disabled>Chọn</button></td>
        <tr>`;
    }

    var status = localStorage.getItem('status');
    var role = JSON.parse(localStorage.getItem('role'));
    if (status != -1 && role.localeCompare("KH") == 0)
        document.getElementById('tableBody').innerHTML = string;
    else
        document.getElementById('tableBody').innerHTML = string2;
}
//Lấy vị trí trong TuyenDuong
function takeindexTD(a) {
    var arrTD = JSON.parse(localStorage.getItem('TuyenDuong'));
    var i;
    for (i = 0; i < arrTD.length; i++) {
        if (a === arrTD[i].IDCD)
            break;
    }
    return i;
}
//Lấy chi tiết tuyến đường
function takeCTTD(a) {
    var arrTD = JSON.parse(localStorage.getItem('TuyenDuong'));
    var arrCTTD = JSON.parse(localStorage.getItem('ChiTietTuyenDuong'));
    var i;
    for (i = 0; i < arrTD.length; i++) {
        if (a === arrTD[i].IDCD) {
            a = arrTD[i].IDTD;
            break;
        }
    }
    var string = '';
    for (i = 0; i < arrCTTD.length; i++) {
        if (a === arrCTTD[i].IDTD) {
            string += '<li class="dropdown-item">' + arrCTTD[i].STT + '. ' + arrCTTD[i].nameTD + '</li>';
        }
    }
    return string;
}
//hàm lấy lựa chọn của khách hàng 

function KHselect(a) { //truyền vào là mã chuyến đi
    //Kiểm tra chuyến đi đã chọn có trong bản chi tiết chuyến đi chưa

    var activelogin = JSON.parse(localStorage.getItem('userCurrent'));

    var tmpflag = checkKHselect(a);
    if (checkKHselect2(activelogin, a) == 0) {
        thongbao("Chuyến đi vừa chọn đã trùng!");
    } else {
        var newCTCD = {
            IDCD: a,
            IDKH: activelogin,
            FlagKH: 1,
            FlagTX: tmpflag
        };
        var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));
        // console.log(newCTCD);
        arrCTCD.push(newCTCD);

        localStorage.setItem('ChiTietChuyenDi', JSON.stringify(arrCTCD));
        thongbao('Chọn chuyến đi thành công!<br>Vui lòng xem chi tiết trong mục "Chuyến đi đã chọn"');
    }
}

//hàm kiểm tra trùng chuyến đi đã chọn
function checkKHselect(a) { //truyền vào là mã chuyến đi
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));
    for (var i = 0; i < arrCTCD.length; i++) {
        if (a === arrCTCD[i].IDCD && arrCTCD[i].FlagTX == 1) {
            return 0;
        }
    }
    return 1;
}

//hàm kiểm tra trùng chuyến đi đã chọn
function checkKHselect2(a, machuyendi) { //truyền vào là mã chuyến đi
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));
    for (var i = 0; i < arrCTCD.length; i++) {
        if (a === arrCTCD[i].IDKH && machuyendi == arrCTCD[i].IDCD && arrCTCD[i].FlagKH == 1) {
            return 0;
        }
    }
    return 1;
}

function showTrip() {
    var arrCD = JSON.parse(localStorage.getItem('ChuyenDi'));
    var arrTD = JSON.parse(localStorage.getItem('TuyenDuong'));
    var tr = "";
    var a, b, c, d;
    for (var i = 0; i < arrCD.length; i++) {
        a = arrTD[takeindexTD(arrCD[i].IDCD)].TGBD;
        b = arrTD[takeindexTD(arrCD[i].IDCD)].NgayBD;
        c = takeBDvsKT(arrTD[takeindexTD(arrCD[i].IDCD)].IDTD);
        tr += "<li> chuyến đi lúc " + a + " vào thứ " + b + " có tuyến đường " + c + takeinfoTrip(arrCD[i].IDCD) + " </li>";
    }
    //document.getElementById('test').innerHTML=tr;
}

function takeinfoTrip(a) {
    //lấy thông tin chuyến đi theo mã chuyến đi
    var arrCD = JSON.parse(localStorage.getItem('ChuyenDi'));
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));
    //var arrTD = JSON.parse(localStorage.getItem('TuyenDuong'));
    //var arrCTTD = JSON.parse(localStorage.getItem('ChiTietTuyenDuong'));
    var arrKH = JSON.parse(localStorage.getItem('KhachHang'));
    var arrTX = JSON.parse(localStorage.getItem('TaiXe'));
    tr = "";
    var b, c, d;
    //b = index trong ChiTietChuyenDi nếu ko có thì không tồn tại chuyến đi đó
    //c = index của khách hàng
    //d = index của tài xế
    b = takeindexCTCD(a);
    if (b !== arrCTCD.length) {
        c = takeindexKH(arrCTCD[b].IDKH);
        d = takeindexTX(arrCD[takeindexCD(a)].IDTX);
        tr += " có khách hàng " + arrKH[c].fullname + " với tài xế " + arrTX[d].fullname;
    } else
        tr = " không được thực hiện";
    return tr;
}
//hàm lấy vị trí trong KhachHang
function takeindexKH(a) { //truyền mã KH
    var arrKH = JSON.parse(localStorage.getItem('KhachHang'));
    var i;
    for (i = 0; i < arrKH.length; i++) {
        if (a === arrKH[i].ID)
            break;
    }
    return i;
}
//hàm lấy vị trí trong TaiXe
function takeindexTX(a) { //truyền mã TX
    var arrTX = JSON.parse(localStorage.getItem('TaiXe'));
    var i;
    for (i = 0; i < arrTX.length; i++) {
        if (a === arrTX[i].ID)
            break;
    }
    return i;
}
//hàm lấy vị trí trong ChuyenDi
function takeindexCD(a) { //Truyền mã chuyến đi
    var arrCD = JSON.parse(localStorage.getItem('ChuyenDi'));
    var i;
    for (i = 0; i < arrCD.length; i++) {
        if (a === arrCD[i].IDCD)
            break;
    }
    return i;
}

//Hàm lấy vị trí trong ChiTietChuyenDi khi cả KH và TX có Flag = 1
function takeindexCTCD(a) { //truyền mã CD
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));
    var i;
    for (i = 0; i < arrCTCD.length; i++) {
        //&& arrCTCD[i].FlagKH === 1 && arrCTCD[i].FlagTX === 1
        if (a === arrCTCD[i].IDCD)
            break;
    }
    return i;
}
//hàm lấy điểm bắt đầu và kết thúc của tuyến đường
function takeBDvsKT(a) { //truyền vào mã tuyến đường
    var arrCTTD = JSON.parse(localStorage.getItem('ChiTietTuyenDuong'));
    var s = "";
    for (var i = 0; i < arrCTTD.length; i++) {
        if (a === arrCTTD[i].IDTD) {
            s += "bắt đầu từ " + arrCTTD[i].nameTD;
            break;
        }
    }
    for (var i = arrCTTD.length - 1; i >= 0; i--) {
        if (a === arrCTTD[i].IDTD) {
            s += " đến " + arrCTTD[i].nameTD;
            break;
        }
    }
    return s;
}

function taoChuyenDi() {
    var taixe = JSON.parse(localStorage.getItem('userCurrent'));
    var arrCD = JSON.parse(localStorage.getItem('ChuyenDi'));
    var arrCTTD = JSON.parse(localStorage.getItem('ChiTietTuyenDuong'));
    var arrTD = JSON.parse(localStorage.getItem('TuyenDuong'));

    var newCD = {
        IDCD: 'CD0' + arrCD.length,
        IDTX: taixe
    };
    console.log(newCD);

    var newTD = {
        IDTD: 'TD0' + arrCD.length,
        IDCD: 'CD0' + arrCD.length,
        TGBD: document.getElementById('inputSoGio').value + 'h' + document.getElementById('inputSoPhut').value,
        NgayBD: document.getElementById('inputNgay').value
    }
    console.log(newTD);

    let numb = document.getElementsByClassName('inputTuyenDuong').length;
    // console.log('Số tuyến đường ' + numb);

    var arrStreets = [];

    for (let i = 0; i < numb; i++) {
        var newCTTD = {
            IDTD: 'TD0' + arrCD.length,
            nameTD: document.getElementsByClassName('inputTuyenDuong')[i].value,
            STT: i + 1
        }
        arrStreets.push(newCTTD);
    }
    console.log(arrStreets);

    arrCD.push(newCD);
    arrTD.push(newTD);
    arrCTTD.push(...arrStreets);

    localStorage.setItem('ChuyenDi', JSON.stringify(arrCD));
    localStorage.setItem('TuyenDuong', JSON.stringify(arrTD));
    localStorage.setItem('ChiTietTuyenDuong', JSON.stringify(arrCTTD));

    thongbao('Tạo chuyến đi thành công!');
    setTimeout(`location.reload()`, 2000);
}

function showTripbyKH() { //truyền vào mã khách thường sẽ là activelogin
    var makhachhang = JSON.parse(localStorage.getItem('userCurrent'));

    var arrCD = JSON.parse(localStorage.getItem('ChuyenDi'));
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));
    var arrTD = JSON.parse(localStorage.getItem('TuyenDuong'));

    var a, b, c, d, e;
    var countPH = 0;
    var string = '';

    for (var i = 0; i < arrCTCD.length; i++) {
        if (makhachhang === arrCTCD[i].IDKH) {
            a = arrTD[takeindexTD(arrCTCD[i].IDCD)].TGBD;
            b = 'Thứ ' + arrTD[takeindexTD(arrCTCD[i].IDCD)].NgayBD;
            c = takeCTTD(arrCTCD[i].IDCD);
            //ở trên là hàm của ông tui copy sang tui chỉ thêm biến d và e v 
            //biến d lưu thông tin tài xế
            d = takeinfoTX(arrCD[takeindexCD(arrCTCD[i].IDCD)].IDTX);
            //biến e lưu thông tin xử lý chuyến đi
            // KH vs TX:
            //  0    0  = khách hủy chuyến
            //  1    1  = chuyến đi thực hiện bình thưuòng
            //  1    0  = tài xế có chuyến khác hoặc tài xế hủy chuyến
            e = takedecision(makhachhang, arrCTCD[i].IDCD, i);

            //cột 5 là cột select option nha khi hiện ra là có 2 option 
            // option chính là cái e còn option phụ là "hủy chuyến đi" 
            // khi chọn option "hủy chuyến đi " gọi hàm (setflagKH(A,arrCTCD[i].IDCD))
            string += `
            <tr>
                <th scope="row">` + a + `</th>
                <td>` + b + `</td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-outline-primary dropdown-toggle" type="button" id="" data-bs-toggle="dropdown" aria-expanded="false">
                            Chi tiết tuyến đường
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="">
                            ` + c + `
                        </ul>
                    </div>
                </td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-outline-success dropdown-toggle" type="button" id="" data-bs-toggle="dropdown" aria-expanded="false">
                            Thông tin tài xế
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="">
                            ` + d + `
                        </ul>
                    </div>
                </td>
                <td>` + e + `</td>
                <td><button class="btn btn-outline-danger" type="button" aria-expanded="false" onclick="setflagKH('` + makhachhang + `', '` + arrCTCD[i].IDCD + `'); changeInnerWeb('trangcanhanKH');">Hủy chuyến đi</button></td>
                <td><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#` + arrCTCD[i].IDCD + countPH + `" aria-expanded="false" aria-controls="collapseExample">Phản hồi</button></td>
            </tr>
            <tr class="collapse" id="` + arrCTCD[i].IDCD + countPH + `">
                <td colspan="5">
                    <div class="hstack gap-3">
                        <textarea class="form-control me-auto ms-auto" type="text" placeholder="Phản hồi" id="PhanHoi` + arrCTCD[i].IDCD + countPH + `"></textarea>
                        <div class="vr"></div>
                        <button type="button" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#` + arrCTCD[i].IDCD + countPH + `" onclick="takePhanHoi('` + arrCTCD[i].IDCD + `', 'PhanHoi` + arrCTCD[i].IDCD + countPH++ + `')">Gửi</button>
                    </div>
                </td>
            </tr>
            `;
        }
    }
    var myTable = `
    <div class="table-responsive" style="height: 63.5vh;">
        <table class="table table-hover  align-middle">
            <thead class="table-light">
                <!-- Table head -->
                <tr>
                    <th scope="col">Giờ</th>
                    <th scope="col">Thứ</th>
                    <th scope="col">Tuyến đường</th>
                    <th scope="col">Tài xế</th>
                    <th scope="col">Trạng thái chuyến đi</th>
                    <th scope="col">Hành động</th>
                    <th scope="col">Phản hồi</th>
                </tr>
            </thead>
            <tbody>
                <!-- Thân table -->
                ` + string + `
            </tbody>
        </table>
    </div>`;
    return myTable;
}

function showTripbyTX() { //truyền vào activelogin
    var mataixe = JSON.parse(localStorage.getItem('userCurrent'));

    var arrCD = JSON.parse(localStorage.getItem('ChuyenDi'));
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));
    var arrTD = JSON.parse(localStorage.getItem('TuyenDuong'));

    var a, b, c, d, e;
    var string = '';

    for (var i = 0; i < arrCD.length; i++) {
        if (mataixe === arrCD[i].IDTX) {
            a = arrTD[takeindexTD(arrCD[i].IDCD)].TGBD;
            b = 'Thứ ' + arrTD[takeindexTD(arrCD[i].IDCD)].NgayBD;
            c = takeCTTD(arrCD[i].IDCD);
            //ở trên là hàm của ông tui copy sang tui chỉ thêm biến d và e v 
            //biến d lưu thông tin tài xế
            // console.log(arrCD[i].IDCD);
            // console.log(takeindexCTCDbyTX(arrCD[i].IDCD));

            var tmpE1_index = takeindexCTCDbyTX(arrCD[i].IDCD);
            // alert(tmpE1_index);

            if (tmpE1_index === arrCTCD.length) {
                d = `<li class="dropdown-item">Chưa có khách hàng</li>`;
                e = "Chưa có khách đặt";
            } else {
                var tmpE1 = arrCTCD[takeindexCTCDbyTX(arrCD[i].IDCD)].IDKH; //mã KH
                var tmpE2 = arrCD[i].IDCD;
                d = takeinfoKH(tmpE1);
                e = takedecision2_0(tmpE1, tmpE2, tmpE1_index);
            }
            // d = takeinfoTX(arrCD[takeindexCD(arrCTCD[i].IDCD)].IDTX);
            // if (tmpE1.localeCompare('') == 0) {
            //     d = '<li class="dropdown-item">Chưa có khách hàng</li>';
            // } else {
            // }
            //biến e lưu thông tin xử lý chuyến đi
            // KH vs TX:
            //  0    0  = khách hủy chuyến
            //  1    1  = chuyến đi thực hiện bình thưuòng
            //  1    0  = tài xế có chuyến khác hoặc tài xế hủy chuyến
            // biến phụ lưu mã khách hàng với mã chuyến đi của ChiTietChuyenDi nếu có 
            //mã CD
            string += `
            <tr>
                <th scope="row">` + a + `</th>
                <td>` + b + `</td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-outline-primary dropdown-toggle" type="button" id="" data-bs-toggle="dropdown" aria-expanded="false">
                            Chi tiết tuyến đường
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="">
                            ` + c + `
                        </ul>
                    </div>
                </td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-outline-success dropdown-toggle" type="button" id="" data-bs-toggle="dropdown" aria-expanded="false">
                            Thông tin khách hàng
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="">
                            ` + d + `
                        </ul>
                    </div>
                </td>
                <td>` + e + `</td>
                <td><button class="btn btn-outline-danger" type="button" aria-expanded="false" onclick="setflagTX('` + mataixe + `', '` + arrCD[i].IDCD + `'); changeInnerWeb('trangcanhanTX');"">Hủy chuyến đi</button></td>
            <tr>`;
        }
    }
    var myTable = `
    <div class="table-responsive" style="height: 63.5vh;">
        <table class="table table-hover  align-middle">
            <thead class="table-light">
                <!-- Table head -->
                <tr>
                    <th scope="col">Giờ</th>
                    <th scope="col">Thứ</th>
                    <th scope="col">Tuyến đường</th>
                    <th scope="col">Khách hàng</th>
                    <th scope="col">Trạng thái chuyến đi</th>
                    <th scope="col">Hành động</th>
                </tr>
            </thead>
            <tbody>
                <!-- Thân table -->
                ` + string + `
            </tbody>
        </table>
    </div>`;
    return myTable;
}

//hàm lấy index trong ChiTietChuyenDi 
function takeindexCTCDbyTX(a) { // truyền mã CD
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));
    var i;
    for (i = arrCTCD.length - 1; i >= 0; i--) {
        if (a === arrCTCD[i].IDCD)
            break;
    }
    if (i != -1)
        return i;
    else
        return arrCTCD.length;
}

//hàm lấy thông tin tài xế theo mã tài xế
function takeinfoTX(mataixe) { //truyền vào mã tài xế
    var arrTX = JSON.parse(localStorage.getItem('TaiXe'));
    var i;
    for (i = 0; i < arrTX.length; i++) {
        if (mataixe === arrTX[i].ID)
            break;
    }
    var a, b, c;
    a = arrTX[i].fullname;
    b = arrTX[i].SDT;
    c = arrTX[i].linkcontact;
    return `
    <li class="dropdown-item"> ` + a + `</li> 
    <li class="dropdown-item"> ` + b + `</li> 
    <li class="dropdown-item"> ` + c + `</li>`;
}

//hàm lấy thông tin khách hàng theo mã khách hàng
function takeinfoKH(makhachhang) { //truyền vào mã khách hàng
    var arrKH = JSON.parse(localStorage.getItem('KhachHang'));
    var i;
    for (i = 0; i < arrKH.length; i++) {
        if (makhachhang === arrKH[i].ID)
            break
    }
    var a, b, c;
    a = arrKH[i].fullname;
    b = arrKH[i].SDT;
    c = arrKH[i].linkcontact;
    return `
    <li class="dropdown-item"> ` + a + `</li> 
    <li class="dropdown-item"> ` + b + `</li> 
    <li class="dropdown-item"> ` + c + `</li>`;
}

//Lấy quyết định
function takedecision(a, b, index) { // truyền vào mã khác hàng và mã chuyến đi
    flagcheck = checkflagbyKH(a, b, index);
    if (flagcheck === 1) {
        return "Chuyến đi đã duyệt";
    } else if (flagcheck === 2) {
        console.log('Ra 2');
        return "Bạn đã hủy chuyến đi";
    } else {
        return "Tài xế bận";
    }
}

//Lấy quyết định version 2.0
function takedecision2_0(a, b, i) { // truyền vào mã khách hàng và mã chuyến đi
    flagcheck = checkflagbyKH(a, b, i);
    if (flagcheck === 1) {
        return "Chuyến đi đã kiểm duyệt";
    } else if (flagcheck === 2)
        return "Khách hoặc bạn đã hủy chuyến";
    else if (flagcheck === 0)
        return "Bạn đã có chuyến tương tự";
}

//kiêm tra cờ bằng mã khách hàng và mã chuyến đi
function checkflagbyKH(a, b, i) { // truyền vào mã khách hàng và mã chuyến đi
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));

    if (a == arrCTCD[i].IDKH && b == arrCTCD[i].IDCD && arrCTCD[i].FlagKH == 1 && arrCTCD[i].FlagTX == 1) {
        return 1;
    } else if (a == arrCTCD[i].IDKH && b == arrCTCD[i].IDCD && arrCTCD[i].FlagKH == 1 && arrCTCD[i].FlagTX == 0) {
        return 2;
    } else if (a == arrCTCD[i].IDKH && b == arrCTCD[i].IDCD && arrCTCD[i].FlagKH == 0 && arrCTCD[i].FlagTX == 0) {
        return 2;
    } else {
        return 0;
    }
}

function checkflagbyTX(a, b) { // truyền vào mã khách hàng và mã chuyến đi
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));
    for (var i = 0; i < arrCTCD.length; i++) {
        if (a === arrCTCD[i].IDKH && b === arrCTCD[i].IDCD && arrCTCD[i].FlagKH === 1 && arrCTCD[i].FlagTX === 1) {
            return 1;
        } else if (a === arrCTCD[i].IDKH && b === arrCTCD[i].IDCD && arrCTCD[i].FlagKH === 0) {
            return 2;
        }
    }
    return 0;
}

//hàm hủy chuyến đi của KH chỉ cho phép sửa 1 thành 0 và không cho phép ngược lại
function setflagKH(a, b) { //truyền vào mã khách hàng và mã chuyến đi
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));
    for (var i = arrCTCD.length - 1; i > 0; i--) {
        if (a === arrCTCD[i].IDKH && b === arrCTCD[i].IDCD) {
            arrCTCD[i].FlagKH = 0;
            arrCTCD[i].FlagTX = 0;
            break;
        }
    }
    localStorage.setItem('ChiTietChuyenDi', JSON.stringify(arrCTCD));
    // showTripbyKH();
}
//hàm hủy chuyến đi của KH chỉ cho phép sửa 1 thành 0 và không cho phép ngược lại
function setflagTX(a, b) { //truyền vào mã khách hàng và mã chuyến đi
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));
    for (var i = arrCTCD.length - 1; i > 0; i--) {
        if (b === arrCTCD[i].IDCD) {
            arrCTCD[i].FlagTX = 0;
            break;
        }
    }
    localStorage.setItem('ChiTietChuyenDi', JSON.stringify(arrCTCD));
    // showTripbyTX();
}

function takePhanHoi(b, maPhanHoi) { //truyền mã chuyến đi
    var a = JSON.parse(localStorage.getItem('userCurrent'));
    console.log(b);
    console.log(maPhanHoi);

    var newReport, c;
    var arrReport = JSON.parse(localStorage.getItem('PhanHoi'));
    c = document.getElementById(maPhanHoi).value;
    console.log(c);
    if (c === "") {
        thongbao("Hãy nhập phản hồi");
        return false;
    } else {
        newReport = {
            IDCD: b,
            IDKH: a,
            detail: c
        };
        arrReport.push(newReport);
        localStorage.setItem('PhanHoi', JSON.stringify(arrReport));
        thongbao("Cảm ơn bạn đã phản hồi");
    }
}

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

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

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
        if (b.length < 6 && b != "") {
            thongbao("Mật khẩu ít nhất 6 ký tự");
            return false;
        } else if (c.length != 10 && c != "") {
            thongbao("Số điện thoại không hợp lệ");
            return false;
        } else {
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
        if (b.length < 6 && b != "") {
            thongbao("Mật khẩu ít nhất 6 ký tự");
            return false;
        } else if (c.length != 10 && c != "") {
            thongbao("Số điện thoại không hợp lệ");
            return false;
        } else {
            arrTX[tmp].fullname = a;
            arrTX[tmp].pass = b;
            arrTX[tmp].SDT = c;
            arrTX[tmp].linkcontact = d;
            localStorage.setItem('TaiXe', JSON.stringify(arrTX));
            thongbao("Sửa thông tin thành công");
        }
    }
}