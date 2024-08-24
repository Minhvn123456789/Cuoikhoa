
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

  var name = e.parentNode.parentNode.children[1].children[0].innerHTML
  var price = e.parentNode.children[0].innerHTML
  var image = e.parentNode.parentNode.children[0].children[0]
  var src = image.getAttribute('src')
  var number = 0
  var obj = {
    name: name,
    price: price,
    image: src,
    count: 1
  }
  if (localStorage.getItem('dsSP')) {
    JSON.parse(localStorage.getItem("dsSP")).forEach((e, i) => {
      if (e.name == name) {
        var data = JSON.parse(localStorage.getItem("dsSP"))
        var count = data[i].count
        console.log(count)
        data[i].count = count + 1
        console.log(data)
        localStorage.setItem("dsSP", JSON.stringify(data))
        return
      }
      number++
    });
    if (number == JSON.parse(localStorage.getItem("dsSP")).length) {
      var lstSP = JSON.parse(localStorage.getItem('dsSP'))
      lstSP.push(obj)
      localStorage.setItem('dsSP', JSON.stringify(lstSP))
    }

  }
  else {
    lstSP = []
    lstSP.push(obj)
    localStorage.setItem('dsSP', JSON.stringify(lstSP))
  }
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