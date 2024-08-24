var CurrUser = localStorage.getItem("CurrUser")
if (CurrUser) {
  var li = document.getElementById("Toggle")
  var tk = document.getElementById("tk")
      tk.innerHTML = CurrUser 
  let h5 = document.createElement("h5")
    h5.setAttribute("id","logOut")
    h5.innerHTML = "Đăng xuất"
    li.innerHTML = ""
    li.appendChild(h5)
    h5.addEventListener("click",function() {
      localStorage.removeItem("CurrUser")
      window.location.href = "practice.html"
    })
}else{
    var li = document.getElementById("Toggle")
    li.innerHTML = '<a href="login.html">Đăng Ký</a><a href="Đn.html">/Đăng nhập</a>'
}

function addToCart(e) {
  var name = e.parentNode.parentNode.children[1].innerText;
  var price = e.parentNode.children[0].innerText;
  var image = e.parentNode.parentNode.children[0].children[0];
  var src = image.getAttribute('src');
  var obj = {
      name: name,
      price: price,
      image: src,
      count: 1
  };


  var cart = JSON.parse(localStorage.getItem('dsSP')) || [];
  var itemIndex = cart.findIndex(item => item.name === name);
  if (itemIndex !== -1) {
      cart[itemIndex].count += 1;
  } else {
      cart.push(obj);
  }
  localStorage.setItem('dsSP', JSON.stringify(cart));
}

function addToYT(e) {
  var name = e.parentNode.parentNode.children[1].innerText;
  var price = e.parentNode.children[0].innerText;
  var image = e.parentNode.parentNode.children[0].children[0];
  var src = image.getAttribute('src');

  var favoriteItem = {
      name: name,
      price: price,
      image: src
  };

  var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  var itemIndex = favorites.findIndex(item => item.name === name);
  if (itemIndex === -1) {
      favorites.push(favoriteItem);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}
document.addEventListener("DOMContentLoaded", function() {
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    var container = document.createElement('div');
    container.id = 'favorite-items';

    if (favorites.length === 0) {
        container.innerHTML = '<p>Không có sản phẩm</p>';
    } else {
        var list = document.createElement('ul');
        list.style.display = 'flex';

        favorites.forEach(function(item, index) {
            var itemDiv = document.createElement('ul');

            var imgLi = document.createElement('li');
            imgLi.className = 'e';
            var img = document.createElement('img');
            img.className = 'img';
            img.src = item.image;
            img.style.width = '260px';
            img.style.borderRadius = '5%';
            imgLi.appendChild(img);

            var nameLi = document.createElement('li');
            nameLi.className = 'b';
            nameLi.style.paddingLeft = '35px';
            nameLi.innerHTML = '<b>' + item.name + '</b>';
            var priceLi = document.createElement('li');
            priceLi.className = 'b';
            priceLi.style.paddingLeft = '35px';
            priceLi.style.marginTop = '25px';
            priceLi.style.color = 'gray';
            priceLi.innerHTML = `<span>${item.price}</span>`;

            var removeYT = document.createElement('button');
            removeYT.style.marginLeft = '30px';
            removeYT.style.cursor = 'pointer';
            removeYT.innerText = 'xoá';

            removeYT.addEventListener('click', function() {
                favorites.splice(index, 1); 
                localStorage.setItem('favorites', JSON.stringify(favorites)); // Update localStorage
                location.reload(); 
            });

            priceLi.appendChild(removeYT);
            itemDiv.appendChild(imgLi);
            itemDiv.appendChild(nameLi);
            itemDiv.appendChild(priceLi);

            list.appendChild(itemDiv);
        });

        container.appendChild(list);
    }

    document.body.appendChild(container);
});