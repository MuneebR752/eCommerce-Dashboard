const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
document.addEventListener("DOMContentLoaded", async function () {
  let response = await fetch(`/api/product/${id}`).then((res) => res.json());
  const product = response[0];
  const editproductForm = document.querySelector("#edit-product-form");
  editproductForm.innerHTML = `
  <div class="flex flex-col gap-2 my-6">
  <label class="text-xs font-semibold leading-4" for="email"
    >Product Name</label
  >
  <input
    value="${product.title}"
    oninput="updateInputValue(this)"
    style="background-color: #f4f4f4"
    type="text"
    name="product-name"
    id="product-name"
    class="w-full box-border text-[#6f767e] font-medium leading-6 px-4 py-2 rounded-lg border-0 outline-none"
    placeholder="Enter Product Name"
  />
</div>
<div class="flex flex-col gap-2 my-6">
  <label class="text-xs font-semibold leading-4" for="price"
    >Price</label
  >
  <input
    value=${product.price}
    oninput="updateInputValue(this)"
    style="background-color: #f4f4f4"
    type="number"
    name="price"
    id="price"
    class="w-full box-border text-[#6f767e] font-medium leading-6 px-4 py-2 rounded-lg border-0 outline-none"
    placeholder="Enter Price"
  />
</div>

<div class="flex flex-col gap-2 my-6">
  <label class="text-xs font-semibold leading-4" for="stock-quantity"
    >Stock Quantity</label
  >
  <input
    value=${product.stock_quantity}
    oninput="updateInputValue(this)"
    style="background-color: #f4f4f4"
    type="number"
    name="stock-quantity"
    id="stock-quantity"
    class="w-full box-border text-[#6f767e] font-medium leading-6 px-4 py-2 rounded-lg border-0 outline-none"
    placeholder="Enter Stock Quantity"
  />
</div>

<div class="flex flex-col gap-2 my-6">
  <label class="text-xs font-semibold leading-4" for="category"
    >Category</label
  >
  <select
    value=${product.category}
    oninput="updateInputValue(this)"
    style="background-color: #f4f4f4"
    name="category"
    id="category"
    class="w-full box-border text-[#6f767e] font-medium leading-6 px-4 py-2 rounded-lg border-0 outline-none"
  >
    <option value="men">Men</option>
    <option value="women">Women</option>
    <option value="kids">Kids</option>
  </select>
</div>

<div class="flex flex-col gap-2 my-6">
  <label class="text-xs font-semibold leading-4" for="image-url"
    >Image URL</label
  >
  <input
    value=${product.image}
    oninput="updateInputValue(this)"
    style="background-color: #f4f4f4"
    type="text"
    name="image"
    id="image"
    class="w-full box-border text-[#6f767e] font-medium leading-6 px-4 py-2 rounded-lg border-0 outline-none"
  />
</div>`;
});
async function updateProduct() {
  const title = document.querySelector("#product-name").value;
  const price = document.querySelector("#price").value;
  const stock_quantity = document.querySelector("#stock-quantity").value;
  const category = document.querySelector("#category").value;
  const image = document.querySelector("#image").value;

  let confirmUpdate = confirm("Are you sure you want to update this product?");
  if (!confirmUpdate) {
    return;
  }
  const response = await fetch(`/api/product/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      price,
      stock_quantity,
      category,
      image,
    }),
  }).then((res) => res.json());
  console.log(response);
  if (response.ok) {
    alert("product updated successfully");
    window.location.href = "/products";
  }
}

function updateInputValue(elemnent) {
  const value = elemnent.value;
  elemnent.value = value;
}

async function deleteproduct() {
  let confirmDelete = confirm("Are you sure you want to delete this product?");

  if (confirmDelete) {
    try {
      const response = await fetch(`/api/product/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }
      alert("product deleted successfully");
      location.href = "/products";
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  }
}
