window.onload = function() {
    createAdmin();
    DataSet();
    changeInnerWeb('home');
    changeLogstatus();

    var role = JSON.parse(localStorage.getItem('role'));
    var status = localStorage.getItem('status');

    if (status > 0)
        profile(status, role);
}