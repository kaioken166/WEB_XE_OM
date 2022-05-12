var countNotice = 0;

function thongbao(text) {

    var string = `
    <div id="liveToast` + countNotice + `" class="toast bg-primary bg-opacity-75 bg-gradient text-white border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <strong class="me-auto">Thông báo</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body fw-bold">
            ` + text + `
        </div>
    </div>`;

    $(".toast-container").append(string);
    var toastLive = document.getElementById('liveToast' + countNotice + '');
    var toast = new bootstrap.Toast(toastLive);
    toast.show();
    countNotice++;
}