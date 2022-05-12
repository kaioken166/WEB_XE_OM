// Tạo tài khoản mẫu
function createAdmin() {
    var khArray = [];
    var txArray = [];

    //Kiem tra local storage
    if (localStorage.getItem('KhachHang') == null && localStorage.getItem('TaiXe') == null) {
        var logStatus = -1;
        localStorage.setItem('status', JSON.stringify(logStatus));
        var role = null;
        localStorage.setItem('role', JSON.stringify(role));

        console.log("LocalStorage Mới");

        var user1 = {
            ID: 'admin',
            pass: 'admin',
            fullname: 'Admin',
            SDT: '123'
        };

        var KH1 = {
            ID: 'IDtestKH',
            pass: 'testpass',
            fullname: 'nametestKH',
            SDT: '0987654321',
            linkcontact: 'linktest.com'
        };

        var TX1 = {
            ID: 'IDtestTX',
            pass: 'testpass',
            fullname: 'nametestKH',
            SDT: '0987654321',
            linkcontact: 'linktest.com'
        };

        khArray.push(user1);
        txArray.push(user1);

        khArray.push(KH1);
        txArray.push(TX1);

        // Check mảng
        // console.log(khArray);
        // console.log(txArray);

        // Cập nhật Item
        localStorage.setItem('KhachHang', JSON.stringify(khArray));
        localStorage.setItem('TaiXe', JSON.stringify(txArray));
    }
}

//------------------login-------------------------
function login() {
    // Vị trí của tài khoản trong mảng
    var logStatus = -1;
    // vai trò
    var roleStatus = null;

    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPass").value;

    console.log(username);
    console.log(password);

    var arruserKH = JSON.parse(localStorage.getItem('KhachHang'));
    var arruserTX = JSON.parse(localStorage.getItem('TaiXe'));


    let i, j;
    if (username === "") {
        // alert("Tên đăng nhập và mật khẩu không chính xác");
        thongbao("Tên đăng nhập và mật khẩu không chính xác");
        return false;
    } else if (password === "") {
        // alert("Tên đăng nhập và mật khẩu không chính xác");
        thongbao("Tên đăng nhập và mật khẩu không chính xác");
        return false;
    } else if (username === 'admin' && password === 'admin') {
        thongbao("Đã đăng nhập với tư cách quản trị viên");
        logStatus = 0;
        roleStatus = 'admin';

        localStorage.setItem('status', JSON.stringify(logStatus));
        localStorage.setItem('role', JSON.stringify(roleStatus));
        // reset value
        username = '';
        password = '';
        changeLogstatus();
        setTimeout(`location.reload()`, 2000);
    } else {
        for (i = 0; i < arruserKH.length; i++) {
            if (arruserKH[i].ID === username && arruserKH[i].pass === password) {
                // alert("Đăng nhập thành công");
                thongbao("Đăng nhập thành công");
                logStatus = i;
                roleStatus = 'KH';

                localStorage.setItem('status', JSON.stringify(logStatus));
                localStorage.setItem('role', JSON.stringify(roleStatus));
                // reset value
                username = '';
                password = '';
                changeLogstatus();
                setTimeout(`location.reload()`, 2000);
                // chuyển sang front của khách hàng
                break;
            }
        }
        for (j = 0; j < arruserTX.length; j++) {
            if (arruserTX[j].ID === username && arruserTX[j].pass === password) {
                // alert("Đăng nhập thành công");
                thongbao("Đăng nhập thành công");
                logStatus = j;
                roleStatus = 'TX';

                localStorage.setItem('status', JSON.stringify(logStatus));
                localStorage.setItem('role', JSON.stringify(roleStatus));
                // reset value
                username = '';
                password = '';
                changeLogstatus();
                setTimeout(`location.reload()`, 2000);
                // chuyển sang front của tài xế
                break;
            }
        }
    }
    if (i === arruserKH.length && j === arruserTX.length) {
        // alert("Sai tài khoản hoặc mật khẩu mời kiểm tra lại");
        thongbao("Sai tài khoản hoặc mật khẩu mời kiểm tra lại");
        return false;
    }
}

function logOut() {
    var status = localStorage.getItem('status');
    status = -1;

    var role = localStorage.getItem('role');
    role = null;

    var userCurrent = null;

    localStorage.setItem('userCurrent', JSON.stringify(userCurrent));
    localStorage.setItem('status', JSON.stringify(status));
    localStorage.setItem('role', JSON.stringify(role));

    location.reload();
    // changeLogstatus();

}

function changeLogstatus() {
    console.log('Has changed Log status');
    var khArray = JSON.parse(localStorage.getItem('KhachHang'));
    var txArray = JSON.parse(localStorage.getItem('TaiXe'));

    var status = localStorage.getItem('status');
    var role = JSON.parse(localStorage.getItem('role'));

    if (status == 0) {
        $("#dangkyBtn").remove();
        $("#taoChuyenDi").remove();
        document.getElementById('bottomSidebar').innerHTML =
            `
            <hr>
            <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="./img/noavatar.png" alt="" width="32" height="32" class="me-2">
                <strong>Admin</strong>
            </a>
            <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                <li><a class="dropdown-item" href="#" onclick="logOut();">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>  Đăng xuất</a></li>
            </ul>
            `;
        var quanlyKH = `
        <li id="quanlyKhachHang">
            <a href="#" class="nav-link link-dark" name="quanlyKhachHang" onclick="ActiveChange(); changeInnerWeb(this.name);">
            <i class="fa-solid fa-user fa-lg me-2"></i> Quản lý khách hàng
            </a>
        </li>
        `;
        var quanlyTX = `
        <li id="quanlyTaiXe">
            <a href="#" class="nav-link link-dark" name="quanlyTaiXe" onclick="ActiveChange(); changeInnerWeb(this.name);">
            <i class="fa-solid fa-person-biking fa-lg me-1"></i> Quản lý tài xế
            </a>
        </li>
        `;
        var quanlyChuyenDi = `
        <li id="quanlyChuyenDi">
            <a href="#" class="nav-link link-dark" name="quanlyChuyenDi" onclick="ActiveChange(); changeInnerWeb(this.name);">
                <i class="fa-solid fa-suitcase fa-lg me-2"></i> Quản lý chuyến đi
            </a>
        </li>
        `;
        $(quanlyKH).insertAfter("#danhsach");
        $(quanlyTX).insertAfter("#quanlyKhachHang");
        $(quanlyChuyenDi).insertAfter("#quanlyTaiXe");


    } else if (status == -1) {
        console.log('Đã vào elif 1');
        document.getElementById('bottomSidebar').innerHTML = '';

        var string =
            `<li id="dangkyBtn">
                <a href="#" class="nav-link link-dark" data-bs-toggle="modal" data-bs-target="#dangkyModal" onclick="ActiveChange();">
                    <i class="fa-solid fa-arrow-right-to-bracket fa-lg me-1"></i> Đăng ký
                </a>
            </li>`;
        $(string).insertAfter("#danhsach");
        $("#taoChuyenDi").remove();
    }
    if (role.localeCompare("KH") == 0) {
        console.log('Đã vào elif 2');
        document.getElementById('bottomSidebar').innerHTML =
            `
            <hr>
            <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="./img/noavatar.png" alt="" width="32" height="32" class="me-2">
                <strong>` + khArray[status].fullname + `</strong>
            </a>
            <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">

                <li><a class="dropdown-item" href="#" name="trangcanhanKH" onclick="changeInnerWeb(this.name);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                    </svg>  Chuyến đi đã chọn</a></li>
                <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#profileID">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>  Thông tin cá nhân</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#" onclick="logOut();">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>  Đăng xuất</a></li>
            </ul>
            `;

        $("#dangkyBtn").remove();
    } else if (role.localeCompare("TX") == 0) {
        console.log('Đã vào elif 3');
        document.getElementById('bottomSidebar').innerHTML =
            `
            <hr>
            <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="./img/noavatar.png" alt="" width="32" height="32" class="me-2">
                <strong>` + txArray[status].fullname + `</strong>
            </a>
            <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">

                <li><a class="dropdown-item" href="#" name="trangcanhanTX" onclick="changeInnerWeb(this.name);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                    </svg>  Chuyến đi của bạn</a></li>
                <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#profileID">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>  Thông tin cá nhân</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#" onclick="logOut();"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>  Đăng xuất</a></li>
            </ul>
            `;

        $("#dangkyBtn").remove();
        var taoChuyendi = `
        <li id="taoChuyenDi">
            <a href="#" class="nav-link link-dark" name="taochuyendi" onclick="ActiveChange(); changeInnerWeb(this.name);">
                <i class="fa-solid fa-square-plus fa-lg me-1"></i> Tạo chuyến đi mới
            </a>
        </li>
        `;
        $(taoChuyendi).insertAfter("#danhsach");
    }
}


// Enter để đăng nhập
// Get the input field
var input = document.getElementById("loginPass");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btnLogin").click();
    }
});