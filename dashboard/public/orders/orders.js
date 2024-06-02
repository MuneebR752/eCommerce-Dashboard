let order_status = new URLSearchParams(window.location.search).get(
  "order_status"
);
document.addEventListener("DOMContentLoaded", async function () {
  let orders = await fetch("/api/orders").then((res) => res.json());
  const ordersTable = document.querySelector("#order-table");
  console.log(order_status);
  if (order_status) {
    let selectedCat = document.getElementById("stats-span");
    selectedCat.value = order_status;
  }
  if (order_status && order_status !== "all-ordres") {
    orders = orders.filter((order) => order.status === order_status);
  }

  if (orders.length > 0) {
    orders.map((order) => {
      ordersTable.innerHTML += `
      <tr class="odd:bg-[#efefef] even:bg-[#fcfcfc]">
      <td class="px-6 py-2">
        <div class="flex items-center gap-2">
          <div>
            <img
              class="w-0 sm:w-16"
              src=${order.product_image_url}
              alt="product"
            />
          </div>
          <div class="flex flex-col">
            <p
              class="text-[#1a1d1f] text-[15px] font-bold"
            >
              ${order.product_name}
            </p>
          </div>
        </div>
      </td>
      <td
        class="px-6 py-4 text-[#212529] text-[15px] font-bold"
      >
        ${order.total_price}$
      </td>
      <td
        class="px-6 py-4 text-[#1a1d1f] text-[15px] font-bold"
      >
        ${order.customer_name}
      </td>
      <td
        class="px-6 py-4 text-[#1a1d1f] text-[15px] font-bold"
      >
        ${order.customer_address}
      </td>
      <td
        class="px-6 py-4 text-[#212529] text-[15px] font-bold"
      >
        ${new Date(order.due_date).toISOString().split("T")[0]}
      </td>
      ${
        order.status === "completed"
          ? `<td class="px-6 py-4 text-[15px] font-bold text-green-600">Completed</td>`
          : `<td class="px-6 py-4 text-[15px] font-bold text-red-600">Pending</td>`
      }
      ${
        order.status === "pending"
          ? `<td><button
          onclick="completeOrder(${order.order_id})"
      class="box-border px-2 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800"
    >
      Completed?
    </button></td>`
          : ``
      }
          `;
    });
  }
});

async function completeOrder(orderId) {
  let confirmOrder = confirm("Are you sure you want to complete this order?");
  if (!confirmOrder) return;
  await fetch(`/api/order/${orderId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: "completed" }),
  });
  location.reload();
}
function handleOrderStatusChange(value) {
  const order_status = value;
  if (order_status === "all-ordres") {
    window.location.href = `/orders`;
    return;
  }
  window.location.href = `/orders?order_status=${order_status}`;
}
