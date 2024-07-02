function check() {
    var fullName = document.getElementById("name").value.trim();
    var phone = document.getElementById("sdt").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("pass").value.trim();
    var password1 = document.getElementById("passr").value.trim();
    var nameRegex = /^[a-zA-Z ]{10,}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^[0-9]{10}$/;
  
    // Kiểm tra tên
    if (fullName === "") {
        document.getElementById("name").nextElementSibling.innerHTML = "Tên đăng nhập không được bỏ trống";
    } else if(!nameRegex.test(fullName)) {
        document.getElementById("name").nextElementSibling.innerHTML = "Tên đăng nhập tối thiểu 10 ký tự và không chứa ký tự đặc biệt";
    }
    else {
        document.getElementById("name").nextElementSibling.innerHTML = "";
    }
  
    // Kiểm tra email
    if (email === "" || !emailRegex.test(email)) {
        document.getElementById("email").nextElementSibling.innerHTML = "Email không hợp lệ";
    } else {
        document.getElementById("email").nextElementSibling.innerHTML = "";
    }
  
    // Kiểm tra số điện thoại
    if(phone == "") {
        document.getElementById("sdt").nextElementSibling.innerHTML = "Số điện thoại không được bỏ trống";
    } else if (!phoneRegex.test(phone)) {
        document.getElementById("sdt").nextElementSibling.innerHTML = "Số điện thoại không hợp lệ";
    } else {
        document.getElementById("sdt").nextElementSibling.innerHTML = "";
    }
  
    // Kiểm tra mật khẩu
    if (password === "") {
        document.getElementById("pass").nextElementSibling.innerHTML = "Vui lòng nhập mật khẩu";
    } else if(password.length < 6) {
        document.getElementById("pass").nextElementSibling.innerHTML = "Mật khẩu của bạn phải dài từ 6 ký tự";
    } else {
        document.getElementById("pass").nextElementSibling.innerHTML = "";
    }

    //Check pass
    if (password1 === "") {
        document.getElementById("passr").nextElementSibling.innerHTML = "Vui lòng nhập lại mật khẩu";
    } else if(password1 !== password) {
        document.getElementById("passr").nextElementSibling.innerHTML = "Mật khẩu của bạn không khớp";
    } else {
        alert("Đăng ký thành công");
        document.getElementById("passr").nextElementSibling.innerHTML = "";
        window.location = "index.html"
    }
  }