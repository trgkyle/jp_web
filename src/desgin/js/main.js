// cac xu ly kich ban cho index.html

// khai bao bien

// def

var def = "---tu khoa---";
var emp = "";

function setFirstTime(fn) {
  fn.txtKeyword.value = def;
}

function setKeyword(fn, isClick) {
  var value = fn.txtKeyword.value;

  if (isClick) {
    if (value.trim() == def) {
      fn.txtKeyword.value = emp;
    }
  } else {
    if (value.trim() == emp) {
      fn.txtKeyword.value = def;
    }
  }
}
function checkValidKeyword(fn) {
  var value = fn.txtKeyword.value;

  if (value.trim() == def || value.trim() == emp) {
    var message = "Hãy nhập vào từ khoá tìm kiếm";
    window.alert(message);
    fn.txtKeyword.focus();
    fn.txtKeyword.select();
  }
}
