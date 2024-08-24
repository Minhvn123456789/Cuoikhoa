function loadCart() {
    var cartContainer = document.getElementById('cart-container');
    var cart = JSON.parse(localStorage.getItem('dsSP')) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Giỏ hàng của bạn đang trống</p>";
        cartContainer.style.fontSize = "50px";
        cartContainer.style.marginLeft = "400px";
        cartContainer.style.marginTop = "33px";
        return;
    }

    var total = 0;
    var cartHTML = '<table><tr><th>Ảnh</th><th>Tên</th><th>Giá</th><th>Số lượng</th><th>Hành động</th></tr>';
    
    cart.forEach((item, index) => {
        var price = parseFloat(item.price); 
        var count = parseFloat(item.count); 
        var itemTotal = price * count; 
        total += itemTotal;         
        cartHTML += `<tr>
                        <td><img src="${item.image}" style="width: 100px;"/></td>
                        <td>${item.name}</td>
                        <td>${price},000</td>
                        <td>
                            <button onclick="updateCount(${index}, -1);">-</button>
                            ${count}
                            <button onclick="updateCount(${index}, 1)">+</button>
                        </td>
                        <td><button onclick="removeFromCart(${index})">Xóa</button></td>
                    </tr>`;
    });

    cartHTML += "</table>"; 
    cartHTML += `<h1>Tổng giá: ${total},000 VND</h1>`;
    cartContainer.innerHTML = cartHTML;
}

function updateCount(index, delta) {
    var cart = JSON.parse(localStorage.getItem('dsSP')) || [];

    cart[index].count += delta;
    if (cart[index].count <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem('dsSP', JSON.stringify(cart));
    loadCart();
}

function removeFromCart(index) {
    var cart = JSON.parse(localStorage.getItem('dsSP')) || [];

    cart.splice(index, 1);
    localStorage.setItem('dsSP', JSON.stringify(cart));
    loadCart();
}

function order() {
    var cart = JSON.parse(localStorage.getItem('dsSP')) || [];
    if (cart.length > 0) {
        alert('Đặt hàng thành công!');
        localStorage.removeItem('dsSP');
        loadCart();
    } else {
        alert('Giỏ hàng của bạn đang trống!');
    }
}

document.addEventListener('DOMContentLoaded', loadCart);

document.getElementById('order-button').addEventListener('click', order);

var CurrUser = localStorage.getItem("CurrUser");
if (CurrUser) {
    var li = document.getElementById("Toggle");
    var tk = document.getElementById("tk");
    tk.innerHTML = CurrUser;
    let h5 = document.createElement("h5");
    h5.setAttribute("id","logOut");
    h5.innerHTML = "Đăng xuất";
    li.innerHTML = "";
    li.appendChild(h5);
    h5.addEventListener("click", function() {
        localStorage.removeItem("CurrUser");
        window.location.href = "practice.html";
    });
} else {
    var li = document.getElementById("Toggle");
    li.innerHTML = '<a href="login.html">Đăng Ký</a><a href="Đn.html">/Đăng nhập</a>';
}
