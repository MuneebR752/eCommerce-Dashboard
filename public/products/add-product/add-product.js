document.addEventListener("DOMContentLoaded", async function () {
  let form = document.getElementsByTagName("form")[0];
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const jsonObject = {};
    for (const [key, value] of formData.entries()) {
      jsonObject[key] = value;
    }
    try {
      const response = await fetch("/api/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonObject),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }
      alert("product added successfully");
      window.location.href = "/products";
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  });
});
