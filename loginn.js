var users = [];

var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(users));
    }

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;

    if (email === '') {
        alert('Vui lòng nhập email');
        return;
    }
    if (password === '') {
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
    if (password !== password2) {
        alert('Mật khẩu không khớp');
        return;
    }

    for (const item of JSON.parse(localStorage.getItem('users'))) {
        if (item.tk === email) {
            alert('Tài khoản đã tồn tại');
            return;
        }
    }

    var newUser = {
        tk: email,
        mk: password,
    };

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = 'Đn.html'; 
});