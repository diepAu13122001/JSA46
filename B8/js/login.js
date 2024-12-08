// lay url => kiem tra xem dang o trang nao
const pathname = location.pathname;

// [HOME] -----------------------------------------------------------
if (
  pathname.includes("index.html") ||
  pathname.charAt(pathname.length - 1) == "/"
) {
  // kiem tra neu chua login => chuyen trang login
  if (!localStorage.getItem("currentUser")) {
    location.href = "./html/login.html";
  }
}

// [LOGIN] ----------------------------------------------------------
// kiem tra thong tin dang nhap

// kiem tra thong tin dang ky

// luu du lieu cho dang ky

// bat su kien cho button dang nhap

// bat su kien cho button dang ky
