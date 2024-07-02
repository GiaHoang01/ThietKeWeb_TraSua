function muangay()
{
    const addressbtn = document.querySelector('#datHang')
    const addressclose = document.querySelector('#address-close')
    addressbtn.addEventListener("click", function(){
        document.querySelector('.address-form').style.display = "flex"
    })
    addressclose.addEventListener("click", function(){
        document.querySelector('.address-form').style.display = "none"
    })
}

function KiemTra()
{
    var fullName = document.getElementById("FullName").value.trim();
    var phoneNumber = document.getElementById("PhoneNumber").value.trim();
    var addrs = document.getElementById("Address").value.trim();
    var paymentMethod = document.getElementById("PayMethod").value;
    console.log(paymentMethod);

    //Kiểm Tra Họ và Tên
    if (fullName === "")
    {
        document.getElementById("FullNameError").style.display ='block';
        document.getElementById("FullNameError").innerHTML = "Họ và tên không được để trống";
    }
    else if (/\d/.test(fullName))
    {
        document.getElementById("FullNameError").style.display ='block';
        document.getElementById("FullNameError").innerHTML = "Họ và tên không được chứa số";
    }
    else
    {
        document.getElementById("FullNameError").innerHTML = "";
    }

    //Kiểm tra số điện thoại
    if (phoneNumber === "")
    {
        document.getElementById("PhoneNumberError").style.display = 'block';
        document.getElementById("PhoneNumberError").innerHTML = "Số điện thoại không được để trống";
    }
    else if (phoneNumber.length < 10)
    {
        document.getElementById("PhoneNumberError").style.display = 'block';
        document.getElementById("PhoneNumberError").innerHTML = "Số điện thoại phải gồm 10 số";
    }
    else if (/\D/.test(phoneNumber))
    {
        document.getElementById("PhoneNumberError").style.display = 'block';
        document.getElementById("PhoneNumberError").innerHTML = "Số điện thoại không được chứa chữ";
    }
    else
    {
        document.getElementById("PhoneNumberError").innerHTML = "";
    }

    //Kiểm tra địa chỉ
    if (addrs === "")
    {
        document.getElementById("AddressError").style.display = 'block';
        document.getElementById("AddressError").innerHTML = "Địa chỉ không được để trống";
    }
    else
    {
        document.getElementById("AddressError").innerHTML = "";
    }


    //Kiểm tra phương thức thanh toán
    if ((paymentMethod == 1) === true)
    {
        document.getElementById("PayError").style.display = 'block';
        document.getElementById("PayError").innerHTML = "Vui lòng chọn phương thức thanh toán";
    }
    else
    {
        document.getElementById("PayError").innerHTML = "";
    }

    //Nếu thành công thì sẽ hiện thông báo bạn đã đặt hàng thành công
    if (document.getElementById("FullNameError").innerHTML == "" && document.getElementById("PhoneNumberError").innerHTML == "" && document.getElementById("AddressError").innerHTML == "" && document.getElementById("PayError").innerHTML == "")
    {
        document.getElementById('successMessage').style.display = 'block';
    }
}

function ThanhToan()
{
    const addressbtn = document.querySelector('#ThanhToan')
    const addressclose = document.querySelector('#address-close')
    addressbtn.addEventListener("click", function(){
        document.querySelector('.address-form').style.display = "flex"
    })
    addressclose.addEventListener("click", function(){
        document.querySelector('.address-form').style.display = "none"
    })
}