var cartItems = sessionStorage.getItem("CART_ITEMS");
  var cartItemsArr = cartItems ? JSON.parse(cartItems) : [];

  var giohangTable = document.getElementById("giohang");

  // Xóa nội dung cũ của bảng giỏ hàng
  giohangTable.innerHTML = "";

  // Duyệt qua danh sách sản phẩm và thêm vào bảng giỏ hàng
  for (var i = 0; i < cartItemsArr.length; i++) {
    var product = cartItemsArr[i];

    var giohangTr = document.createElement("tr");

    var giohangTdHinh = document.createElement("td");
    var giohangTdHinhImg = document.createElement("img");
    giohangTdHinhImg.src = product.hinh;
    giohangTdHinh.appendChild(giohangTdHinhImg);
    giohangTr.appendChild(giohangTdHinh);

    var giohangTdTen = document.createElement("td");
    giohangTdTen.textContent = product.ten;
    giohangTr.appendChild(giohangTdTen);

    var giohangTdSl = document.createElement("td");
    giohangTdSl.textContent = product.sl;
    giohangTr.appendChild(giohangTdSl);

    var giohangTdSize = document.createElement("td");
    giohangTdSize.textContent = product.size;
    giohangTr.appendChild(giohangTdSize);

    var giohangTdGia = document.createElement("td");
    giohangTdGia.textContent = product.gia;
    giohangTr.appendChild(giohangTdGia);


    var giohangTdThanhTien = document.createElement("td");
    giohangTdThanhTien.textContent = product.ThanhTien;
    giohangTr.appendChild(giohangTdThanhTien);


    var giohangTdXoa = document.createElement("td");
    var giohangTdXoaInput = document.createElement("input");
    giohangTdXoaInput.style.color="white"
    giohangTdXoaInput.style.fontWeight="bolder"
    giohangTdXoaInput.style.fontSize="15px"
    giohangTdXoaInput.style.background="red"
    giohangTdXoaInput.style.width="70px";
    giohangTdXoaInput.style.height="30px";
    giohangTdXoaInput.type = "button";
    giohangTdXoaInput.value = "Xóa";
    giohangTdXoaInput.setAttribute("onclick", "xoa(this)");
    giohangTdXoa.appendChild(giohangTdXoaInput);
    giohangTr.appendChild(giohangTdXoa)


    
    giohangTable.appendChild(giohangTr);
    tongdonhang();

  }
function xoa(x)
{
  var tr=x.parentElement.parentElement;
  tr.remove();
  cartItemsArr.splice(x, 1);
  sessionStorage.setItem("CART_ITEMS", JSON.stringify(cartItemsArr));
  tongdonhang()
}

function tong()
{
  var totalThanhTien = 0
  for (var i = 0; i < cartItemsArr.length; i++)
  {
    var product = cartItemsArr[i];
    var thanhTien = parseFloat(product.ThanhTien);
    totalThanhTien += thanhTien;
  }
  var formattedThanhtien = totalThanhTien.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") +".000"+ "₫";
   
  document.getElementById("TT").innerHTML="Tổng tiền :"+formattedThanhtien;
}

function tongdonhang(){
  var giohang= document.getElementById("giohang");
  var tr= giohang.children;
  var tong =0;
  for (let i=0; i < tr.length; i++) {
  var td =tr[i].getElementsByTagName("td"); var ttien = parseInt(td [5].innerHTML);
  tong += ttien;
}
var formattedThanhtien = tong.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") +".000"+ "₫";
document.getElementById("TT").innerHTML="Tổng tiền:  "+formattedThanhtien;
}











function removeFromCart(index) {
  var cartItems = sessionStorage.getItem("CART_ITEMS");
  var cartItemsArr = cartItems ? JSON.parse(cartItems) : [];

  if (index >= 0 && index < cartItemsArr.length) {
    cartItemsArr.splice(index, 1); // Xóa sản phẩm khỏi mảng

    // Lưu lại danh sách sản phẩm vào sessionStorage
    sessionStorage.setItem("CART_ITEMS", JSON.stringify(cartItemsArr));

  }
}

// function displayCart() {
//   // ...

//   for (var i = 0; i < cartItemsArr.length; i++) {
//     // ...

//     var giohangTdAction = document.createElement("td");
//     var giohangTdActionBtn = document.createElement("button");
//     giohangTdActionBtn.textContent = "Xóa";
//     giohangTdActionBtn.addEventListener("click", function() {
//       removeFromCart(i); // Gọi hàm để xóa sản phẩm
//     });
//     giohangTdAction.appendChild(giohangTdActionBtn);
//     giohangTr.appendChild(giohangTdAction);

//     giohangTable.appendChild(giohangTr);
//   }
// }