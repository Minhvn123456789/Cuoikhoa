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