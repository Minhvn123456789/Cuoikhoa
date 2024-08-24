var users = JSON.parse(localStorage.getItem('users'));

var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (password == '') {
        alert('Vui lòng nhập mật khẩu');
        return;
    }

    if (email.length < 8) {
        alert('Tên tài khoản phải đủ 8 ký tự');
        return;
    }

    if (password.length < 8) {
        alert('Mật khẩu phải đủ 8 ký tự');
        return;
    }

    for (const item of users) {
        if (item.tk == email && item.mk == password) {
            localStorage.setItem("CurrUser",item.tk)
            // Chuyển hướng sang trang khác ở đây
            window.location.href = 'practice.html';
            return;
        }
    }

    alert('Đăng nhập thất bại');
});