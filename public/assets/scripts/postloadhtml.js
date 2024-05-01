let acc = JSON.parse(sessionStorage.getItem("user"));
document.getElementById("acc-name").innerText = acc.name;
document.getElementById("acc-email").innerText = acc.email;
document.getElementById("acc-role").innerText = acc.role;
