document.addEventListener("DOMContentLoaded", async function () {
  const form = document.querySelector("#add-account-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const jsonObject = {};
    for (const [key, value] of formData.entries()) {
      jsonObject[key] = value;
    }
    try {
      const response = await fetch("/api/add-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonObject),
      });

      if (!response.ok) {
        throw new Error("Failed to add account");
      }
      alert("Account added successfully");
      window.location.href = "/accounts";
    } catch (error) {
      console.error("Error adding account:", error.message);
    }
  });
});
