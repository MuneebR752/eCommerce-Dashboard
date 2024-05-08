let category = new URLSearchParams(window.location.search).get("category");
document.addEventListener("DOMContentLoaded", async function () {
  let products = await fetch("/api/products").then((res) => res.json());
  const productsTable = document.querySelector("#product-table");
  if (category) {
    let selectedCat = document.getElementById("stats-span");
    selectedCat.value = category;
  }
  if (category && category !== "all") {
    products = products.filter((product) => product.category === category);
  }
  if (products.length > 0) {
    products.map((product) => {
      productsTable.innerHTML += `
        <tr class="odd:bg-[#efefef] even:bg-[#fcfcfc]">
        <td class="px-6 py-2">
          <div class="flex items-center gap-2">
            <div>
              <img
                width="63"
                height="80"
                src="${product.image_url}"
                alt="product"
              />
            </div>
            <div class="flex flex-col">
              <p
                class="text-[#1a1d1f] text-[15px] font-bold"
              >
                ${product.name}
              </p>
            </div>
          </div>
        </td>
        <td
          class="px-6 py-4 text-[#212529] text-[15px] font-bold"
        >
          ${product.price}$
        </td>
        <td
          class="px-6 py-4 text-[#1a1d1f] text-[15px] font-bold"
        >
          ${product.stock_quantity}
        </td>
        <td
          class="px-6 py-4 text-[#1a1d1f] text-[15px] font-bold"
        >
        ${product.category}
        </td>
        <td
          class="px-6 py-4 text-[#212529] text-[15px] font-bold"
        >
          ${new Date(product.created_at).toISOString().split("T")[0]}
        </td>
        <td class="px-6 py-4">
          <div class="flex gap-2">
            <button
              class="shadow-[0px_2px_8px_rgba(0,0,0,0.12)] border-0"
            >
            <a href="/products/edit-product/?id=${product.product_id}">
              <img
                width="36"
                src="../assets/img/pen.png"
                alt=""
              />
              </a>
            </button>
            <button
              onclick="deleteProduct(${product.product_id})"
              class="shadow-[0px_2px_8px_rgba(0,0,0,0.12)] border-0"
            >
              <img
                width="36"
                src="../assets/img/Icon-close.png"
                alt=""
              />
            </button>
          </div>
        </td>
      </tr>
        `;
    });
  }
});

async function deleteProduct(id) {
  let confirmDelete = confirm("Are you sure you want to delete this product?");
  if (!confirmDelete) {
    return;
  }
  try {
    const response = await fetch(`/api/product/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete product");
    }
    alert("product deleted successfully");
    window.location.href = "/products";
  } catch (error) {
    console.error("Error deleting product:", error.message);
  }
}

function handleCategoryChange(value) {
  const category = value;
  if (category === "all") {
    window.location.href = `/products`;
    return;
  }
  window.location.href = `/products?category=${category}`;
}
