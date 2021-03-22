function checkValidLogin(fn) {
  var name = fn.txtUserName.value;
  var pass = fn.txtUserPass.value;

  var validName = true;
  var validPass = true;
  var message = "";

  name = name.trim();
  if (name == "") {
    message = "Nhập tên tài khoản vào hệ thống";
    validName = false;
  } else {
    if (name.length < 5 || name.length > 50) {
      message = "Tên tài khoản không hợp lệ!";
      validName = false;
    } else {
      if (name.indexOf("@") != -1) {
        var parttern = /\w+@\w+[.]\w/;
        if (!name.match(parttern)) {
          message = "Không đúng cấu trúc hộp thư.";
          validName = false;
        }
      }
      //   } else {

      //   }
    }
  }

  pass = pass.trim();
  if (pass == "") {
    message += "\nThiếu mật khẩu hệ thống!";
    validPass = false;
  } else {
    if (pass.length < 5) {
      message += "\nMật khẩu không hợp lệ";
      validPass = false;
    }
  }

  if (document.getElementById("chkSave").checked) {
    message += "\nĐây có phải máy tính của bạn sử dụng không?";
  }

  // xuat thong bao

  if (message != "") {
    window.alert(message);
    if (!validName) {
      fn.txtUserName.focus();
      fn.txtUserName.select();
    } else if (!validPass) {
      fn.txtUserPass.focus();
      fn.txtUserPass.select();
    }
  }

  // Trả về kết quả
  return validName && validPass;
}
