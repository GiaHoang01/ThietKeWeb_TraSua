var size = "";
function chonSize()
{
    document.getElementById('tien').innerText= '10.000₫'
    sessionStorage.setItem('SIZE', document.querySelector('.S').innerText);
    size = document.querySelector('.S').innerText;
}


function chonSize1()
{
    document.getElementById('tien').innerText= '20.000₫'
    sessionStorage.setItem('SIZE', document.querySelector('.M').innerText);
    size = document.querySelector('.M').innerText;
}

function chonSize2()
{
    document.getElementById('tien').innerText= '30.000₫'
    sessionStorage.setItem('SIZE', document.querySelector('.L').innerText);
    size = document.querySelector('.L').innerText;
}

function chonSize3()
{
    document.getElementById('tien').innerText= '29.000₫'
    sessionStorage.setItem('SIZE', document.querySelector('.S').innerText);
    size = document.querySelector('.S').innerText;
}


function chonSize4()
{
    document.getElementById('tien').innerText= '39.000₫'
    sessionStorage.setItem('SIZE', document.querySelector('.M').innerText);
    size = document.querySelector('.M').innerText;
}

function chonSize5()
{
    document.getElementById('tien').innerText= '49.000₫'
    sessionStorage.setItem('SIZE', document.querySelector('.L').innerText);
    size = document.querySelector('.L').innerText;
}


function LuuThongTin()
{

    var hinh = document.querySelector('.img-left img').src;
    var ten = document.getElementById('ten').innerText;
    var sl = document.getElementById('SoLuong').value;
    var gia = document.getElementById('tien').innerText;
    var thanhtien = parseFloat(sl) * parseFloat(gia);
    var formattedThanhtien = thanhtien.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") +".000"+ "₫";
    var product = {
        hinh: hinh,
        ten: ten,
        sl: sl,
        size: size,
        gia: gia,
        ThanhTien: formattedThanhtien,
    };
    var cartItems = sessionStorage.getItem("CART_ITEMS");
    var cartItemsArr = cartItems ? JSON.parse(cartItems) : [];

    // Thêm sản phẩm vào danh sách
    cartItemsArr.push(product);

    // Lưu danh sách sản phẩm vào sessionStorage
    sessionStorage.setItem("CART_ITEMS", JSON.stringify(cartItemsArr));
}






