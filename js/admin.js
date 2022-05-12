function danhsachKH() {
    var arruserKH = JSON.parse(localStorage.getItem('KhachHang'));

    var tbody = '';

    for (let i = 1; i < arruserKH.length; i++) {
        tbody +=
            `<tr>
            <th scope="row">` + arruserKH[i].ID + `</th>
            <td>` + arruserKH[i].pass + `</td>
            <td>` + arruserKH[i].fullname + `</td>
            <td>` + arruserKH[i].SDT + `</td>
            <td>` + arruserKH[i].linkcontact + `</td>
            <td><button type="button" class="btn btn-outline-danger" onclick="deleteKH('` + arruserKH[i].ID + `');">Xóa</td>
            </tr>`;
    }

    var string = `
    <div class="fs-3 fw-bold mb-3">Danh sách khách hàng</div>
    <div class="table-responsive" style="height: 500px;">
        <table class="table table-hover  align-middle">
            <thead class="table-light">
                <!-- Table head -->
                <tr>
                    <th scope="col">Mã (UserName)</th>
                    <th scope="col">Mật khẩu</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Thông tin liên hệ</th>
                    <th scope="col">Hành động</th>
                </tr>
            </thead>
            <tbody>
                <!-- Thân table -->
                ` + tbody + `
            </tbody>
        </table>
    </div>`;
    // document.getElementById('inner').innerHTML = string;
    return string;
}

function danhsachTX() {
    var arruserTX = JSON.parse(localStorage.getItem('TaiXe'));

    var tbody = '';

    for (let i = 1; i < arruserTX.length; i++) {
        tbody +=
            `<tr>
            <th scope="row">` + arruserTX[i].ID + `</th>
            <td>` + arruserTX[i].pass + `</td>
            <td>` + arruserTX[i].fullname + `</td>
            <td>` + arruserTX[i].SDT + `</td>
            <td>` + arruserTX[i].linkcontact + `</td>
            <td><button type="button" class="btn btn-outline-danger" onclick="deleteTX('` + arruserTX[i].ID + `');">Xóa</td>
            </tr>`;
    }

    var string = `
    <div class="fs-3 fw-bold mb-3">Danh sách tài xế</div>
    <div class="table-responsive" style="height: 500px;">
        <table class="table table-hover  align-middle">
            <thead class="table-light">
                <!-- Table head -->
                <tr>
                    <th scope="col">Mã (UserName)</th>
                    <th scope="col">Mật khẩu</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Thông tin liên hệ</th>
                    <th scope="col">Hành động</th>
                </tr>
            </thead>
            <tbody>
                <!-- Thân table -->
                ` + tbody + `
            </tbody>
        </table>
    </div>`;
    // document.getElementById('inner').innerHTML = string;
    return string;
}

function danhsachChuyenDi() {
    var arrCD = JSON.parse(localStorage.getItem('ChuyenDi'));
    var arrTD = JSON.parse(localStorage.getItem('TuyenDuong'));

    var string = '';
    // var string2 = '';
    var a, b, c;
    for (var i = 0; i < arrCD.length; i++) {
        a = arrTD[takeindexTD(arrCD[i].IDCD)].TGBD;
        b = 'Thứ ' + arrTD[takeindexTD(arrCD[i].IDCD)].NgayBD;
        c = takeCTTD(arrCD[i].IDCD);
        string +=
            `<tr>
            <th scope="row">` + arrCD[i].IDCD + `</th>
            <td>` + a + `</td>
            <td>` + b + `</td>
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
            <td>` + getNameTX(getIDTX_inChuyenDi(arrCD[i].IDCD)) + `</td>
            <td>` + getNameKH(getIDKH_inChiTietChuyenDi(arrCD[i].IDCD)) + `</td>
            <td><button type="button" class="btn btn-danger" onclick="delCD('` + arrCD[i].IDCD + `')">Xóa chuyến</button></td>
        <tr>`;
    }

    var myTable = `
    <div class="fs-3 fw-bold mb-3">Danh sách chuyến đi</div>
    <div class="table-responsive" style="height: 500px;">
        <table class="table table-hover  align-middle">
            <thead class="table-light">
                <!-- Table head -->
                <tr>
                    <th scope="col">Mã</th>
                    <th scope="col">Giờ</th>
                    <th scope="col">Thứ</th>
                    <th scope="col">Tuyến đường</th>
                    <th scope="col">Tài xế</th>
                    <th scope="col">Khách hàng</th>
                    <th scope="col">Hành động</th>
                </tr>
            </thead>
            <tbody>
                <!-- Thân table -->
                ` + string + `
            </tbody>
        </table>
    </div>`;
    // document.getElementById('inner').innerHTML = myTable;
    return myTable;
}

function getIDTX_inChuyenDi(machuyendi) {
    var arrCD = JSON.parse(localStorage.getItem('ChuyenDi'));

    for (let i = 0; i < arrCD.length; i++) {
        if (arrCD[i].IDCD == machuyendi) {
            return arrCD[i].IDTX;
        }
    }
    return -1;
}

function getNameTX(matx) {
    var arrTX = JSON.parse(localStorage.getItem('TaiXe'));

    for (let i = 0; i < arrTX.length; i++) {
        if (arrTX[i].ID == matx) {
            return arrTX[i].fullname;
        }
    }
    return "Undefined";
}

function getIDKH_inChiTietChuyenDi(machuyendi) {
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));

    for (let i = 0; i < arrCTCD.length; i++) {
        if (arrCTCD[i].IDCD == machuyendi && arrCTCD[i].FlagTX == 1) {
            return arrCTCD[i].IDKH;
        }
    }
    return -1;
}

function getNameKH(makh) {
    var arrKH = JSON.parse(localStorage.getItem('KhachHang'));

    for (let i = 0; i < arrKH.length; i++) {
        if (arrKH[i].ID == makh) {
            return arrKH[i].fullname;
        }
    }
    return "Chưa có khách hàng";
}