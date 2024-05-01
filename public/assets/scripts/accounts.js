document.addEventListener("DOMContentLoaded", async function () {
  let accounts = await fetch("/api/accounts").then((res) => res.json());
  const accountsTable = document.querySelector("#account-table");

  if (accounts.length > 0) {
    accounts.map((account) => {
      accountsTable.innerHTML += `
        <tr class="odd:bg-[#efefef] even:bg-[#fcfcfc]">
        <td class="px-6 py-2">
          <div class="flex items-center gap-2">
            <div class="flex flex-col">
              <p
                class="text-[#1a1d1f] text-[15px] font-bold"
              >
                ${account.name}
              </p>
            </div>
          </div>
        </td>
        <td
          class="px-6 py-4 text-[#212529] text-[15px] font-bold"
        >
          ${account.email}
        </td>
        <td
          class="px-6 py-4 text-[#212529] text-[15px] font-bold"
        >
          ${account.password}
        </td>
        <td
          class="px-6 py-4 text-[#212529] text-[15px] font-bold"
        >
        ${account.role}
        </td>
        <td class="px-6 py-4">
          <div class="flex gap-2">
            <button
              class="shadow-[0px_2px_8px_rgba(0,0,0,0.12)] border-0"
            >
              <img
                width="36"
                src="../assets/img/Icon-visibility.png"
                alt=""
              />
            </button>
            <button
                class="shadow-[0px_2px_8px_rgba(0,0,0,0.12)] border-0"
                >
                <img
                    width="36"
                    src="../assets/img/pen.png"
                    alt=""
                />
            </button>
            <button
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
