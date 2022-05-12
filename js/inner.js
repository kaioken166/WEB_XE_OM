function ActiveChange() {
    // Active trên sidebar
    // Get the container element
    var btnContainer = document.getElementById("ulSidebar");

    // Get all buttons with class="btn" inside the container
    var btns = btnContainer.getElementsByClassName("nav-link");

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");

            // If there's no active class
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }

            // Add the active class to the current/clicked button
            this.className += " active";
        });
    }
}
// truyền name để thay đổi
function changeInnerWeb(object) {
    var a = object;
    var s;
    // console.log(a);
    switch (a) {
        case 'danhsach':
            s = danhSach_chuyendi();
            break;
        case 'home':
            s = home();
            break;
        case 'taochuyendi':
            s = innerChuyenDi();
            break;
        case 'trangcanhanKH':
            s = showTripbyKH();
            break;
        case 'trangcanhanTX':
            s = showTripbyTX();
            break;
        case 'quanlyKhachHang':
            s = danhsachKH();
            break;
        case 'quanlyTaiXe':
            s = danhsachTX();
            break;
        case 'quanlyChuyenDi':
            s = danhsachChuyenDi();
            break;
        default:
            s = "";
            break;
    }
    document.getElementById("innerHere").innerHTML = s;
}

function home() {
    var string =
        `<div class="container-fluid my-5">
            <div class="row mb-4">
                <div class="col mt-3">
                    <h1 style="font-size: 300%;">Giải quyết vấn đề <span class="text-primary"> đi lại </span> của các bạn sinh viên</h1>
                    <!-- cần bổ sung -->
                    <p>
                        Website đem đến cho bạn một số
                        <span class="fw-bold">
                            hành trình có sẵn của những bạn sinh viên khác để chia sẻ giúp đỡ
                        </span> nhau về mặt phương tiện.
                    </p>
                    <button type="button" class="btn btn-outline-primary shadow mt-3" data-bs-toggle="modal" data-bs-target="#dangkyModal">THAM GIA NGAY</button>
                </div>
                <div class="col text-center">
                    <img src="./img/rikebike.gif" class="rounded-circle" alt="rikebike">
                </div>
            </div>
        </div>`;
    var string2 =
        `<div class="container-fluid my-5">
            <div class="row mb-2">
                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">Đào tạo</strong>
                            <h3 class="mb-0">Tuyển thực tập sinh</h3>
                            <div class="mb-1 text-muted">May 6</div>
                            <p class="card-text mb-auto">Hiện tại Công ty XBoss đang tuyển thực tập DEV : số lượng 10 Tester: Số lượng 8 BA: số lượng Công ty SBT tuyển lập trình viên 10 bạn.</p>
                            <a href="#" class="stretched-link">Đọc tiếp</a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <img src="./img/SGU.jpg" alt="sgu" style="width: 200px; height: 250px;">

                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-success">Thực tập</strong>
                            <h3 class="mb-0">Thực tập tốt nghiệp học kỳ hè năm học 2021-2022.</h3>
                            <div class="mb-1 text-muted">May 11</div>
                            <p class="mb-auto">Sinh viên dự định đăng ký thực tập học kỳ hè tham khảo kế hoạch và quy trình thực tập.</p>
                            <a href="#" class="stretched-link">Đọc tiếp</a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                        <img src="./img/dh-sai-gon.jpg" alt="sgu" style="width: 200px; height: 250px;">

                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-5">
                <div class="col-md-8">
                <h3 class="pb-4 mb-4 fst-italic border-bottom">
                    From KHOA CNTT SGU
                </h3>
                <article class="blog-post">
                    <h2 class="blog-post-title">Giới thiệu chung</h2>
                    <p class="blog-post-meta">30 THÁNG MƯỜI HAI, 2018 <a href="#">KHOA CNTT SGU</a></p>

                    <p>Trường Đại học Sài Gòn được thành lập theo <strong>Quyết định số 478/QĐ-TTg ngày 25/04/2007 của Thủ tướng Chính phủ</strong> trên cơ sở nâng cấp Trường Cao đẳng Sư phạm Thành phố Hồ Chí Minh. Đại học Sài Gòn là cơ sở giáo dục Đại học công lập trực thuộc UBND TP. Hồ Chí Minh và chịu sự quản lý của Nhà nước về giáo dục của Bộ Giáo dục và Đào tạo. Đại học Sài Gòn là trường đào tạo đa ngành, đa lĩnh vực. Đại học Sài Gòn đào tạo từ trình độ cao đẳng, đại học và sau đại học. Đại học Sài Gòn đào tạo theo 2 phương thức: chính quy và không chính quy (vừa làm vừa học, liên thông). Tốt nghiệp Đại học Sài Gòn người học được cấp các bằng cấp: cử nhân, kỹ sư, thạc sĩ…</p>
                    <hr>
                    <p>Ngoài việc đào tạo cấp bằng, Đại học Sài Gòn còn được phép đào tạo, cấp các chứng chỉ Ứng dụng Công nghệ thông tin và Ngoại ngữ, cấp chứng chỉ nghiệp vụ sư phạm bậc I, bậc II và các nghiệp vụ khác.</p>
                    <h2>Sứ mệnh và Tầm nhìn</h2>
                    <blockquote class="blockquote">
                    <p>Tích cực thực hiện đổi mới và góp phần phát triển giáo dục đại học Việt Nam, phấn đấu đến năm 2035 phát triển Trường Đại học Sài Gòn trở thành trường đại học theo hướng nghiên cứu, đạt chuẩn quốc tế</p>
                    </blockquote>
                    <h3>Lịch sử và cơ cấu tổ chức</h3>
                    <p>Khoa công nghệ thông tin được thành lập từ năm 2007 (trước đó là Bộ môn Tin học), đội ngũ giảng viên của khoa bao gồm:</p>
                    <ul>
                    <li>26 cán bộ giảng viên: Trong đó có 2 PGS, 6 tiến sĩ, 7 nghiên cứu sinh và 7 thạc sỹ và 4 chuyên viên có trình độ từ đại học trở lên.</li>
                    <li>Trường còn có đội ngũ 16 giảng viên có trình độ từ thạc sĩ trở lên ở các chuyên ngành thuộc lĩnh vực công nghệ thông tin đang công tác tại các phòng ban: Trong số các giảng viên cơ hữu của trường có 13 giảng viên tốt nghiệp thạc sĩ/tiến sĩ/ hoặc đang làm NCS ở các nước Mỹ, Anh, Úc, Nhật, Nga, Ý,..</li>
                    </ul>
                    <p>Khoa công nghệ thông tin được Nhà trường giao nhiệm vụ đào tạo ở hai bậc học:</p>
                    <ul>
                    <li>Trình độ đại học: với hai ngành học là Công nghệ thông tin (tuyển sinh từ năm học 2007-2008) và Kỹ thuật phần mềm (tuyển sinh từ năm học 2018-2019).</li>
                    <li>Trình độ thạc sĩ: với một chuyên ngành Khoa học máy tính (tuyển sinh từ năm học 2016-2017). Năm học 2018-2019, Khoa Công nghệ thông tin có 500 chỉ tiêu; quy mô đào tạo hệ chính quy toàn Khoa hiện tại là 1106 sinh viên.</li>
                    </ul>
                    <p>Khoa Công nghệ thông tin được tổ chức thành bốn bộ môn:</p>
                    <ol>
                    <li>Khoa học máy tính.</li>
                    <li>Kỹ thuật phần mềm.</li>
                    <li>Hệ thống thông tin.</li>
                    <li>Kỹ thuật máy tính.</li>
                    </ol>
                    <h3>Triết lý giáo dục của Khoa Công nghệ Thông tin:</h3>
                    <dl>
                    <dt>Nhân văn</dt>
                    <dd>Có trí tuệ, có tri thức và khát vọng vươn lên về tri thức, trí tuệ. Có tình yêu thương đồng loại, hiểu biết và quý trọng tự nhiên; tình yêu thương đó cần được trau dồi và trở nên sâu sắc, rộng khắp đến vô hạn. Có văn hóa, biết tích lũy kinh nghiệm sống và phát triển chúng để trở thành văn minh. Có trách nhiệm với bản thân, gia đình và xã hội.</dd>
                    <dt>Sáng tạo</dt>
                    <dd>Khuyến khích sinh viên sáng tạo, sáng tạo để có kiến thức, kĩ năng chuyên môn vững vàng; có khả năng học tập suốt đời để thích ứng với mọi thay đổi; đề cao năng lực sáng tạo để có thể trở thành tinh hoa.</dd>
                    <dt>Khai phóng</dt>
                    <dd>Tầm cao mới; góp phần khẳng định vị trí và thương hiệu của Khoa Công nghẹ Thông tin trường Đại học Sài Gòn</dd>
                    </dl>
                    <h2>Văn phòng khoa</h2>
                    <h3>Giáo vụ, công tác sinh viên, hành chính – văn thư:</h3>
                    <ul>
                    <li>Tô Thị Ngọc Châu, ngocchau@sgu.edu.vn</li>
                    <li>Lê Ngọc Kim Ngân, nganlnk@sgu.edu.vn</li>
                    </ul>
                    <h3>Kỹ thuật phòng máy, cơ sở thiết bị:</h3>
                    <ul>
                    <li>Nguyễn Trung Tín, nguyentin.it91@gmail.com</li>
                    <li>Lê Cao Sơn, sonle@sgu.edu.vn</li>
                    </ul>
                </article>

                <nav class="blog-pagination" aria-label="Pagination">
                    <a class="btn btn-outline-primary" href="#">Older</a>
                    <a class="btn btn-outline-secondary disabled">Newer</a>
                </nav>

                </div>

                <div class="col-md-4">
                    <div class="position-sticky" style="top: 2rem;">
                        <div class="p-4 mb-3 bg-light rounded">
                        <h4 class="fst-italic">Thông tin</h4>
                        <p class="mb-0">Trường Đại học Sài Gòn là cơ sở giáo dục đại học và nghiên cứu khoa học công lập, đào tạo nguồn nhân lực chất lượng cao đáp ứng yêu cầu phát triển kinh tế – xã hội của Thành phố Hồ Chí Minh và cả nước.</p>
                        </div>

                        <div class="p-4">
                        <h4 class="fst-italic">Lưu trữ</h4>
                        <ol class="list-unstyled mb-0">
                            <li><a href="#">March 2021</a></li>
                            <li><a href="#">February 2021</a></li>
                            <li><a href="#">January 2021</a></li>
                            <li><a href="#">December 2020</a></li>
                            <li><a href="#">November 2020</a></li>
                            <li><a href="#">October 2020</a></li>
                            <li><a href="#">September 2020</a></li>
                            <li><a href="#">August 2020</a></li>
                            <li><a href="#">July 2020</a></li>
                            <li><a href="#">June 2020</a></li>
                            <li><a href="#">May 2020</a></li>
                            <li><a href="#">April 2020</a></li>
                        </ol>
                        </div>

                        <div class="p-4">
                        <h4 class="fst-italic">Liên kết ngoài</h4>
                        <ol class="list-unstyled">
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

    var status = JSON.parse(localStorage.getItem('status'));

    if (status != -1) {
        return string2;
    } else {
        return string;
    }
}

function danhSach_chuyendi() {
    var string =
        `
        <div class="fs-3 fw-bold mb-3">Danh sách Chuyến đi</div>
        <div class="table-responsive" style="height: 63.5vh;">
        <table class="table table-hover  align-middle">
            <thead class="table-light">
                <!-- Table head -->
                <tr>
                    <th scope="col">Thời gian</th>
                    <th scope="col">Ngày</th>
                    <th scope="col">Chi tiết</th>
                    <th scope="col">Chọn chuyến đi</th>
                </tr>
            </thead>
            <tbody id="tableBody">
                <!-- Thân table -->
                
            </tbody>
        </table>
    </div>`;
    return string;
}



function profile(status, role) {
    var arruserKH = JSON.parse(localStorage.getItem('KhachHang'));
    var arruserTX = JSON.parse(localStorage.getItem('TaiXe'));

    var userCurrent = null;
    // truyền username vào hàm này
    if (role.localeCompare("KH") == 0) {
        userCurrent = arruserKH[status];
    }
    if (role.localeCompare("TX") == 0) {
        userCurrent = arruserTX[status];
    }
    var string =
        `
        <div class="row mb-3">
            <div class="col-sm-4 fw-bold">Tên đăng nhập</div>
            <div class="col">` + userCurrent.ID + `</div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-4 fw-bold">Mật khẩu</div>
            <div class="col">` + userCurrent.pass + `</div>
        </div>

        <div class="row mb-3">
            <div class="col-sm-4 fw-bold">Tên</div>
            <div class="col">` + userCurrent.fullname + `</div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-4 fw-bold">Số điện thoại</div>
            <div class="col">` + userCurrent.SDT + `</div>
        </div>
        <div class="row mb-5">
            <div class="col-sm-4 fw-bold">Mạng xã hội</div>
            <div class="col">` + userCurrent.linkcontact + `</div>
        </div>
        <!-- Thay đổi thông tin -->
        <h4 class="text-primary mb-3 fw-bold">Thay đổi thông tin cá nhân</h4>
        <div class="row mb-3">
            <div class="col-sm-4 fw-bold">Tên</div>
            <div class="col"><input type="text" class="form-control" id="idnewname" placeholder="Tên" aria-label="City"></div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-4 fw-bold">Mật Khẩu</div>
            <div class="col"><input type="password" class="form-control" id="idnewpass" placeholder="Mật khẩu mới" aria-label="City"></div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-4 fw-bold">Số điện thoại</div>
            <div class="col"><input type="text" class="form-control" id="idnewsdt" placeholder="Số điện thoại mới" aria-label="City" maxlength="10"></div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-4 fw-bold">Mạng xã hội</div>
            <div class="col"><input type="text" class="form-control" id="idnewlinkcontact" placeholder="Liên kết mạng xã hội" aria-label="City"></div>
        </div>
        <hr>
        <div class="d-grid gap-2 col-6 mx-auto">
            <!-- Btn chuyển sang form đăng ký -->
            <button class="btn btn-outline-primary" type="button" data-bs-dismiss="modal" onclick="setinfo();">Lưu thay đổi</button>
        </div>
        `;
    // return string;
    document.getElementById("windownsProfile").innerHTML = string;

    localStorage.setItem('userCurrent', JSON.stringify(userCurrent.ID));
}

function printInputFields(number) {
    var string =
        `
        <div class="row mb-3 inputTuyenDuongCheck">
            <div class="col-sm-4"></div>
            <div class="col-sm-6">
                <input type="text" aria-label="CTTD" class="form-control inputTuyenDuong" placeholder="Tên Đường">
            </div>
        <div>
    `;
    $('.inputTuyenDuongCheck').remove();
    for (let i = 1; i <= number; i++) {
        $(string).insertAfter('#soTuyenDuongCheck');
    }
}

function innerChuyenDi() {
    var string =
        `
        <div class="fs-3 fw-bold mb-3">Tạo chuyến đi mới</div>
        <div class="mx-5">
            <div class="row mb-3">
                <div class="col-sm-4 fw-bold">Thứ trong tuần</div>
                <div class="col-sm-6">
                    <select class="form-select" aria-label="" id="inputNgay">
                        <option hidden selected value="">Chọn thứ</option>
                        <option value="1">Chủ nhật</option>
                        <option value="2">Thứ 2</option>
                        <option value="3">Thứ 3</option>
                        <option value="4">Thứ 4</option>
                        <option value="5">Thứ 5</option>
                        <option value="6">Thứ 6</option>
                        <option value="7">Thứ 7</option>
                    </select>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-sm-4 fw-bold">Thời điểm</div>
                <div class="col-sm-6">
                    <div class="input-group">
                        <select class="form-select" aria-label="" id="inputSoGio">
                            <option hidden selected value="">Giờ</option>
                            <option value="1">1 giờ</option>
                            <option value="2">2 giờ</option>
                            <option value="3">3 giờ</option>
                            <option value="4">4 giờ</option>
                            <option value="5">5 giờ</option>
                            <option value="6">6 giờ</option>
                            <option value="7">7 giờ</option>
                            <option value="8">8 giờ</option>
                            <option value="9">9 giờ</option>
                            <option value="10">10 giờ</option>
                            <option value="11">11 giờ</option>
                            <option value="12">12 giờ</option>
                            <option value="13">13 giờ</option>
                            <option value="14">14 giờ</option>
                            <option value="15">15 giờ</option>
                            <option value="16">16 giờ</option>
                            <option value="17">17 giờ</option>
                            <option value="18">18 giờ</option>
                        </select>
                        <select class="form-select" aria-label="" id="inputSoPhut">
                            <option hidden selected value="">Phút</option>
                            <option value="0">0 phút</option>
                            <option value="15">15 phút</option>
                            <option value="30">30 phút</option>
                            <option value="45">45 phút</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row mb-3" id="soTuyenDuongCheck">
                <div class="col-sm-4 fw-bold">Tuyến đường</div>
                <div class="col-sm-6">
                    <input type="number" class="form-control" placeholder="Số đường đi qua" onkeyup="printInputFields(this.value);">
                </div>
            </div>
            <div class="d-grid gap-2 col-3 mx-auto">
                <button class="btn btn-outline-warning" type="button" onclick="taoChuyenDi();">Tạo mới</button>
            </div>
        </div>
    `;
    return string;
}

// Hàm test
// function showLength() {
//     let numb = document.getElementsByClassName('inputTuyenDuong').length;
//     console.log('Số tuyến đường ' + numb);

//     var arrStreets = [];

//     for (let i = 0; i < numb; i++) {
//         arrStreets.push(document.getElementsByClassName('inputTuyenDuong')[i].value);
//     }
//     console.log(arrStreets);
// }