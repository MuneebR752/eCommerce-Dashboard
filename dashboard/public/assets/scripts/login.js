document.addEventListener("DOMContentLoaded", async function () {
  const form = document.querySelector("#login-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const jsonObject = {};
    for (const [key, value] of formData.entries()) {
      jsonObject[key] = value;
    }
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonObject),
      });
      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("isLogined", true);
        sessionStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/";
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Error adding account:", error.message);
    }
  });
});
