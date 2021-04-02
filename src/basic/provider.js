






function checkValidProvider(fn) {
  var name = document.getElementById("txtName").value;
  var check = document.getElementById("chkAgree").checked;
  var btnReg = document.getElementById("btnReg");
  var errorName = document.getElementById("viewErrorName");
  if (name.trim() != "" && check) {
    btnReg.disable = false;
  } else {
    if (name.trim() == "") {
      errorName.innerHTML = "Thiếu tên nhà cung cấp";
      errorName.color = "red";
    } else {
      errorName.innerHTML = "";
    }
    btnReg.disable = true;
  }
}
