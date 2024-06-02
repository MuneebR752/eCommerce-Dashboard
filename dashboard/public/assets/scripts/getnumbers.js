document.addEventListener("DOMContentLoaded", async function () {
  let orderCount = 0;
  let productCount = 0;
  let userCount = 0;
  fetch("/api/getTotalNumber")
    .then((response) => response.json())
    .then((data) => {
      orderCount = data.orderCount;
      productCount = data.productCount;
      userCount = data.userCount;
      document.getElementById("products").innerHTML = productCount;
      document.getElementById("orders").innerHTML = orderCount;
      document.getElementById("users").innerHTML = userCount;
    })
    .catch((error) => {
      console.error("Error fetching numbers:", error);
    });
});
