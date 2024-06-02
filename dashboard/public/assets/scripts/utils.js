function logout() {
  sessionStorage.removeItem("isLogined");
  sessionStorage.removeItem("user");
  window.location.href = "/login";
}

let isLogined = sessionStorage.getItem("isLogined");
if (!isLogined) {
  window.location.href = "/login";
}
