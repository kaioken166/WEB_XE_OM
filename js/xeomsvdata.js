//Tạo local cho chuyến đi
function creCDlocal() {
    var newCD = { IDCD: 'IDtestCD', ID: 'IDtestTX' };

    localStorage.setItem('ChuyenDi', JSON.stringify(newCD));
}
//Tạo local cho tuyến đường
function creTDlocal() {
    var newTD = { IDTD: 'IDtestTD', IDCD: 'IDtestCD', TGBD: '6h00', NgayBD: '2' };

    localStorage.setItem('TuyenDuong', JSON.stringify(newTD));
}
//Tạo local cho chi tiết tuyến đường
function creCTTDlocal() {
    var newCTTD = [
        { IDTD: 'IDtestTD1', nameTD: 'name1testTD', STT: '1' },
        { IDTD: 'IDtestTD1', nameTD: 'name2testTD', STT: '2' },
        { IDTD: 'IDtestTD1', nameTD: 'name3testTD', STT: '3' },
        { IDTD: 'IDtestTD1', nameTD: 'name4testTD', STT: '4' }
    ];

    localStorage.setItem('ChiTietTuyenDuong', JSON.stringify(newCTTD));
}
//Tạo local cho chi tiết chuyến đi
function creCTCDlocal() {
    var newCTCD = { IDCD: 'IDtestCD', ID: 'IDtestKH', FlagKH: 1, FlagTX: 0 };

    localStorage.setItem('ChiTietChuyenDi', JSON.stringify(newCTCD));
}
//bộ dư liệu tĩnh có sẵn
function DataSet() {
    // alert("Vào DATASET");
    if (localStorage.getItem('ChuyenDi') == null && localStorage.getItem('TuyenDuong') == null) {
        var oldArrKH = JSON.parse(localStorage.getItem('KhachHang'));
        var arrKH = [
            { ID: 'KHvanA123', pass: '123456', fullname: 'Nguyen Van A', SDT: '0987654321', linkcontact: 'https://www.facebook.com/Anguyenvan/' },
            { ID: 'KHkhacquynh083', pass: '123456', fullname: 'Su Khac Quynh', SDT: '0987654083', linkcontact: 'https://www.facebook.com/KhacQuynh083/' },
            { ID: 'KHTrihuynh097', pass: '123456', fullname: 'Huynh Dang Thanh Tri', SDT: '0987654097', linkcontact: 'https://www.facebook.com/ThanhTri097/' },
            { ID: 'KHchauhuy199', pass: '123456', fullname: 'Chau The Gia Huy', SDT: '0987654199', linkcontact: 'https://www.facebook.com/Giahuy199/' }
        ];

        oldArrKH.push(...arrKH); //nối mảng với mảng

        var oldArrTX = JSON.parse(localStorage.getItem('TaiXe'));
        var arrTX = [
            { ID: 'TXhuytruong214', pass: '123456', fullname: 'Truong Gia Huy', SDT: '0987654214', linkcontact: 'https://www.facebook.com/Giahuy214/' },
            { ID: 'TXhieu168', pass: '123456', fullname: 'Hoang Huynh Trung Hieu', SDT: '09876543168', linkcontact: 'https://www.facebook.com/Trunghieu168/' },
            { ID: 'TXthanhB123', pass: '123456', fullname: 'Tran Thanh B', SDT: '0987654321', linkcontact: 'https://www.facebook.com/thanhBtran/' }
        ];
        oldArrTX.push(...arrTX); // tương tự

        var arrCD = [
            { IDCD: 'CD00001', IDTX: 'TXhuytruong214' },
            { IDCD: 'CD00002', IDTX: 'TXhuytruong214' },
            { IDCD: 'CD00003', IDTX: 'TXhuytruong214' },
            { IDCD: 'CD00004', IDTX: 'TXthanhB123' },
            { IDCD: 'CD00005', IDTX: 'TXhieu168' },
            { IDCD: 'CD00006', IDTX: 'TXhieu168' }
        ];

        var arrCTTD = [
            { IDTD: 'TD001', nameTD: 'Ly Thuong Kiet', STT: '1' },
            { IDTD: 'TD001', nameTD: '3 Thang 2 ', STT: '2' },
            { IDTD: 'TD001', nameTD: 'Ly Thai To', STT: '3' },
            { IDTD: 'TD001', nameTD: 'Nguyen Van Cu', STT: '4' },
            { IDTD: 'TD001', nameTD: 'An Duong Vuong', STT: '5' },
            { IDTD: 'TD002', nameTD: 'An Duong Vuong', STT: '1' },
            { IDTD: 'TD002', nameTD: 'Nguyen Van Cu', STT: '2' },
            { IDTD: 'TD002', nameTD: 'Ly Thai To', STT: '3' },
            { IDTD: 'TD002', nameTD: '3 Thang 2', STT: '4' },
            { IDTD: 'TD002', nameTD: 'Ly Thuong Kiet', STT: '5' },
            { IDTD: 'TD003', nameTD: 'Nguyen Kiem', STT: '1' },
            { IDTD: 'TD003', nameTD: 'Hai Ba Trung', STT: '2' },
            { IDTD: 'TD003', nameTD: 'Ly Tu Trong', STT: '3' },
            { IDTD: 'TD003', nameTD: 'Nguyen Thai Hoc', STT: '4' },
            { IDTD: 'TD003', nameTD: 'Tran Hung Dao', STT: '5' },
            { IDTD: 'TD003', nameTD: 'Nguyen Bieu', STT: '6' },
            { IDTD: 'TD003', nameTD: 'Nguyen Trai', STT: '7' },
            { IDTD: 'TD004', nameTD: 'Truong Chinh', STT: '1' },
            { IDTD: 'TD004', nameTD: 'Au Co', STT: '2' },
            { IDTD: 'TD004', nameTD: '3 Thang 2', STT: '3' },
            { IDTD: 'TD004', nameTD: 'Ly Thuong Kiet ', STT: '4' },
            { IDTD: 'TD004', nameTD: 'Hong Bang', STT: '5' },
            { IDTD: 'TD004', nameTD: 'An Duong Vuong', STT: '6' },
            { IDTD: 'TD005', nameTD: 'Huynh Tan Phat', STT: '1' },
            { IDTD: 'TD005', nameTD: 'Nguyen Thi Thap', STT: '2' },
            { IDTD: 'TD005', nameTD: 'Ba Trac', STT: '3' },
            { IDTD: 'TD005', nameTD: 'Nguyen Van Cu', STT: '4' },
            { IDTD: 'TD005', nameTD: 'An Duong Vuong', STT: '5' },
            { IDTD: 'TD006', nameTD: 'An Duong Vuong', STT: '1' },
            { IDTD: 'TD006', nameTD: 'Nguyen Van Cu', STT: '2' },
            { IDTD: 'TD006', nameTD: 'Ba Trac', STT: '3' },
            { IDTD: 'TD006', nameTD: 'Huynh Thi Thap', STT: '4' },
            { IDTD: 'TD006', nameTD: 'Huynh Tan Phat', STT: '5' }
        ];

        var arrTD = [
            { IDTD: 'TD001', IDCD: 'CD00001', TGBD: '6h30', NgayBD: '2' },
            { IDTD: 'TD002', IDCD: 'CD00002', TGBD: '11h30', NgayBD: '2' },
            { IDTD: 'TD003', IDCD: 'CD00003', TGBD: '6h15', NgayBD: '4' },
            { IDTD: 'TD004', IDCD: 'CD00004', TGBD: '12h30', NgayBD: '5' },
            { IDTD: 'TD005', IDCD: 'CD00005', TGBD: '6h30', NgayBD: '3' },
            { IDTD: 'TD006', IDCD: 'CD00006', TGBD: '17h30', NgayBD: '3' }

        ];

        var arrCTCD = [
            { IDCD: 'CD00001', IDKH: 'KHkhacquynh083', FlagKH: 1, FlagTX: 1 },
            { IDCD: 'CD00003', IDKH: 'KHchauhuy199', FlagKH: 1, FlagTX: 1 },
            // { IDCD: 'CD00005', IDKH: '', FlagKH: 0, FlagTX: 1 },
            { IDCD: 'CD00006', IDKH: 'KHTrihuynh097', FlagKH: 1, FlagTX: 1 },
            { IDCD: 'CD00006', IDKH: 'KHvanA123', FlagKH: 1, FlagTX: 0 },
            { IDCD: 'CD00002', IDKH: 'KHkhacquynh083', FlagKH: 1, FlagTX: 1 }
        ];

        var arrReport = [
            { IDCD: 'CD00001', IDKH: 'KHkhacquynh083', detail: 'tài xế đen quá' },
            { IDCD: 'CD00003', IDKH: 'KHchauhuy199', detail: 'tài xế vui tính' },
            { IDCD: 'CD00006', IDKH: 'KHTrihuynh097', detail: 'tài xế dễ thương' },
            { IDCD: 'CD00002', IDKH: 'KHkhacquynh083', detail: 'tài xế hơi láo' }
        ];


        localStorage.setItem('KhachHang', JSON.stringify(oldArrKH));
        localStorage.setItem('TaiXe', JSON.stringify(oldArrTX));
        localStorage.setItem('ChuyenDi', JSON.stringify(arrCD));
        localStorage.setItem('TuyenDuong', JSON.stringify(arrTD));
        localStorage.setItem('ChiTietTuyenDuong', JSON.stringify(arrCTTD));
        localStorage.setItem('ChiTietChuyenDi', JSON.stringify(arrCTCD));
        localStorage.setItem('PhanHoi', JSON.stringify(arrReport));

        thongbao('Load dữ liệu thành công!');
    }
}