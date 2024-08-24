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