function logout() {
  sessionStorage.removeItem("isLogined");
  window.location.href = "/login";
}

let isLogined = sessionStorage.getItem("isLogined");
if (!isLogined) {
  window.location.href = "/login";
}

let user = JSON.parse(sessionStorage.getItem("user"));
document.getElementById("acc-name").innerHTML = user.name;
document.getElementById("acc-email").innerHTML = user.email;
