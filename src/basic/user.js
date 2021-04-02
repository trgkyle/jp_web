function generatePermis() {
  var permis = new Array();
  permis[0] = "--Chọn--";
  permis[1] = "Thành viên (members)";
  permis[2] = "Tác giả (authors)";
  permis[3] = "Quản lý (managers)";
  permis[4] = "Quản trị (administrators)";
  permis[5] = "Quản trị cấp cao (supers)";

  var permis2 = new Array("--chọn--", "Thành viên");

  // var permis3 = ["--chon--"]

  var opt = `<select name="" class="form-control" id="chkPermis" onChange="refreshPermis(this.form)">`;
  permis.forEach((element, index) => {
    opt += `<option value='${index}'>`;
    opt += element;
    opt += `</option>`;
  });

  opt += `</select>`;
  console.log(opt);
  document.write(opt);
}

function generateRoles() {
  // Danh sach vai tro.
  var roles = new Array(
    "Người sử dụng",
    "Chuyên mục",
    "Thể loại",
    "Bai viet & Tin tuc",
    "He san pham",
    "Nhom san pham",
    "Loai san pham",
    "San pham",
    "Hoa don",
    "Khach hang"
  );
  var role = "";
  for (var i = 0; i < roles.length; i++) {
    if (i % 3 == 0) {
      role += '<div class="row">';
    }
    role += viewRole(i, roles[i]);
    if (i % 3 == 2 || i == roles.length - 1) {
      role += "</div>";
    }
  }
  document.write(role);
}
function viewRole(id, name) {
  var role = "";
  role += '<div class="col-md-4 ">';
  role += '<div class="form-check">';
  role +=
    '<input type="checkbox" name="chks" class="form-check-input" id="chk' +
    id +
    '" onClick="checkPermis(this.form)"/>';
  role +=
    '<label for="chk' +
    id +
    '" disable class="form-check-label">Quan ly ' +
    name +
    "</label>";
  role += "</div>";
  role += "</div>";
  return role;
}

function setCheckBox(fn, dis, check) {
  for (var i = 0; i < fn.length; i++) {
    if (fn.elements[i].type == "checkbox" && fn.elements[i].name == "chks") {
      fn.elements[i].disabled = dis;
      fn.elements[i].checked = check;
    }
  }
}

function refreshPermis(fn) {
  var permis = parseInt(document.getElementById("chkPermis").value);
  if (permis == 4 || permis == 5) {
    this.setCheckBox(fn, true, true);
  } else if (permis == 3) {
    this.setCheckBox(fn, false, true);
    var first_role = document.getElementById("chk0");
    first_role.disabled = true;
  } else if (permis == 2) {
    this.setCheckBox(fn, false, false);
  } else {
    this.setCheckBox(fn, true, false);
  }
  this.checkPermis(fn);
}

function checkName(fn) {
  var name = document.getElementById("txtName").value;

  var validName = true;
  var message = "";
  name = name.trim();
  // them chieu hop mail
  var email = document.getElementById("txtEmail");
  if (name == "") {
    message = "Thiếu tên cho tài khoản!";
    validName = false;
  } else {
    if (name.indexOf(" ") != -1) {
      message = "Tên tài khoản không được có dấu cách ở trong";
      validName = false;
    } else {
      if (name.length < 5 || name.length > 50) {
        message = "Tên tài khoản cần có độ dài từ 5 đến 50 ký tự.";
        validName = false;
      } else {
        if (name.indexOf("@") != -1) {
          var pattern = /\w+@\w+[.]\w/;
          if (!name.match(pattern)) {
            message = "Không đúng cấu trúc hộp thư";
            validName = false;
          } else {
            email.disabled = true;
          }
        } else {
          email.disabled = true;
        }
      }
    }
  }
  // Tham chieu doi toung bao loi
  var viewErr = document.getElementById("errorName");

  if (validName) {
    viewErr.innerHTML = '<id class="fas fa-check-circle"></i>';
    viewErr.style.color = "blue";
    viewErr.style.fontWeight = 600;
    viewErr.style.marginTop = 10;
  } else {
    viewErr.innerHTML = message;
    viewErr.style.color = "red";
    viewErr.style.fontWeight = 600;
    viewErr.style.marginTop = 0;
  }

  return validName;
}

function checkPass(fn) {
  var name = document.getElementById("txtName").value;
  var pass = document.getElementById("txtPass").value;
  var pass2 = document.getElementById("txtPass2").value;

  var validPass = true;
  var validPass2 = true;
  var message = "";
  pass = pass.trim();
  if (pass == "") {
    message = "Thiếu mật khẩu cho tài khoản.";
    validPass = false;
  } else {
    pass2 = pass2.trim();

    if (pass.length >= 6 && pass.length <= 50) {
      if (pass.indexOf(name) != -1) {
        message = "Mật khẩu không chứa tên đăng nhập";
        validPass = false;
      } else {
        validPass = true;
        if (pass2 == "") {
          message = "Mật khẩu xác nhận lại không có";
          validPass2 = false;
        } else if (pass != pass2) {
          message = "Mật khẩu xác nhận không khớp";
          validPass2 = false;
        } else {
          validPass2 = true;
        }
      }
    } else {
      message = "Mật khẩu quá ngắn hoặc quá dài. [6->50]";
      validPass = false;
    }
  }

  // tham chieu doi tuong bao loi

  var errPass = document.getElementById("errorPass");
  var errPass2 = document.getElementById("errorPass2");

  if (validPass && validPass2) {
    errPass.innerHTML = '<i class="fas fa-check-circle">OK</i>';
    errPass.style.color = "blue";
    errPass.style.fontWeight = 600;
    errPass2.innerHTML = "";
  } else {
    if (!validPass2) {
      errPass2.innerHTML = message;
      errPass2.style.color = "red";
      errPass2.style.fontWeight = 600;
    } else {
      errPass2.innerHTML = "";
    }
    if (!validPass) {
      errPass.innerHTML = message;
      errPass.style.color = "red";
      errPass.style.fontWeight = 600;
    } else {
      errPass.innerHTML = "";
    }
  }

  return validPass && validPass2;
}

function checkEmail() {
  // tham chieu toi email

  var email = document.getElementById("txtEmail").value;
  var validEmail = true;

  var message = "";

  if (email == "") {
    message = "Thiếu hộp thư cho tài khoản";
    validEmail = false;
  } else {
    if (email.indexOf("@") == -1) {
      message = "Không phải cấu trúc hộp thư";
      validEmail = false;
    } else {
      var pattern = /\w+@\w+[.]\w/;
      if (!email.match(pattern)) {
        message = "Không đúng cấu trúc hộp thư";
        validEmail = false;
      }
    }
  }

  // tham chieu doi tuong bao loi

  var errEmail = document.getElementById("errEmail");
  if (!validEmail) {
    errEmail.innerHTML = message;
    errEmail.style.color = "red";
    errEmail.style.fontWeight = 600;
  } else {
    errEmail.innerHTML = "";
  }

  return validEmail;
}

function checkPermis(fn) {
  var permis = +document.getElementById("chkPermis").value;
  var validPermis = true;
  var message = "";
  if (permis == 2 || permis == 3) {
    for (var i = 0; i < fn.elements.length; i++) {
      if (fn.elements[i].type == "checkbox" && fn.elements[i].name == "chks") {
        if (fn.elements[i].checked) {
          if (fn.elements[i].disabled) {
            message = "Bạn có muốn thêm vai trò?";
          } else {
            message = "";
          }
          validPermis = true;
          break;
        } else {
          message = "Cần có ít nhất một vai trò.";
          validPermis = false;
        }
      }
    }
  }

  //tham chieu bao loi

  var errPermis = document.getElementById("errPermis");

  if (!validPermis) {
    errPermis.innerHTML = message;
    errPermis.style.color = "red";
    errPermis.style.fontWeight = "bold";
  } else {
    errPermis.innerHTML = message;
    errPermis.style.color = "blue";
    errPermis.style.fontWeight = "bold";
  }
  return validPermis;
}

function checkValidUser(fn) {
  // kiem tra name
  var validName = checkName(fn);
  if (!validName) {
    document.getElementById("txtName").focus();
    document.getElementById("txtName").select();
  } else if (!validPass) {
    document.getElementById("txtPass").focus();
    document.getElementById("txtPass").select();
  } else if (!validEmail) {
    document.getElementById("txtEmail").focus();
    document.getElementById("txtEmail").select();
  } else if(!validPermis){
    document.getElementById("chkPermis").focus();
  }
  // kiem tra pass
  var validPass = checkPass();

  // kiem tra email
  var validEmail = checkEmail();

  // kiem tra permis
  var validPermis = checkPermis(fn);

  return validName && validPass && validEmail && validPermis;
}
