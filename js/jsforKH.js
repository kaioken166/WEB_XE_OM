//vì làm ra file mới nên xàm export này vào file cũ để lấy hàm xài lại
/*
export{
    takeindexCD,
    takeindexTD,
    takeCTTD
};
 */
//lấy modle cũ ra xài lại
import { takeindexCD, takeindexTD, takeCTTD } from 'xeomsv.js';

//hàm show thông tin chuyến đi của khách hàng theo mã khách hàng
function showTripbyKH() { //truyền vào mã khách thường sẽ là activelogin
    var makhachhang = JSON.parse(localStorage.getItem('userCurrent'));

    var arrCD = JSON.parse(localStorage.getItem('ChuyenDi'));
    var arrCTCD = JSON.parse(localStorage.getItem('ChiTietChuyenDi'));
    var arrTD = JSON.parse(localStorage.getItem('TuyenDuong'));

    var a, b, c, d, e;
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
            e = takedecision(makhachhang, arrCTCD[i].IDCD);

            //cột 5 là cột select option nha khi hiện ra là có 2 option 
            // option chính là cái e còn option phụ là "hủy chuyến đi" 
            // khi chọn option "hủy chuyến đi " gọi hàm (setflagKH(A,arrCTCD[i].IDCD))
            string += `
            <tr>
                <th scope="row">` + a + `</th>
                <td>` + b + `</td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="" data-bs-toggle="dropdown" aria-expanded="false">
                            Chi tiết tuyến đường
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="">
                            ` + c + `
                        </ul>
                    </div>
                </td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="" data-bs-toggle="dropdown" aria-expanded="false">
                            Thông tin tài xế
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="">
                            ` + d + `
                        </ul>
                    </div>
                </td>
                <td>` + e + `</td>
            <tr>`;
        }
    }
    var myTable = `
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
    document.getElementById('tableBody').innerHTML = myTable;
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
    <li class="dropdown-item">` + a + `</li> 
    <li class="dropdown-item">` + b + `</li> 
    <li class="dropdown-item">` + c + `</li>`;
}

//Lấy quyết định
function takedecision(a, b) { // truyền vào mã khác hàng và mã chuyến đi
    flagcheck = checkflagbyKH(a, b);
    if (flagcheck === 1) {
        return "Chuyến đi đã duyệt";
    } else if (flagcheck === 2)
        return "Bạn đã hủy chuyến đi";
    else
        return "Tài xế bận";
}
//kiêm tra cờ bằng mã khách hàng và mã chuyến đi
function checkflagbyKH(a, b) { // truyền vào mã khách hàng và mã chuyến đi
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
    for (var i = 0; i < arrCTCD.length; i++) {
        if (a === arrCTCD[i].IDKH && b === arrCTCD[i].IDCD) {
            arrCTCD[i].FlagKH = 0;
            arrCTCD[i].FlagTX = 0;
            break;
        }
    }
    localStorage.setItem('ChiTietChuyenDi', JSON.stringify(arrCTCD));
    // showTripbyKH(a);
}