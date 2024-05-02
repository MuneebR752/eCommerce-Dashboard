document.addEventListener("DOMContentLoaded", async function () {
  let users = await fetch("/api/users").then((res) => res.json());
  const usersTable = document.querySelector("#user-table");

  if (users.length > 0) {
    users.map((user) => {
      usersTable.innerHTML += `
      <tr class="odd:bg-[#efefef] even:bg-[#fcfcfc]">
      <td class="px-6 py-2">
        <div class="flex items-center gap-2">
          <div class="flex flex-col">
            <p
              class="text-[#1a1d1f] text-[15px] font-bold"
            >
              ${user.fname} ${user.lname}
            </p>
          </div>
        </div>
      </td>
      <td
        class="px-6 py-4 text-[#212529] text-[15px] font-bold"
      >
        ${user.email}
      </td>
      <td
        class="px-6 py-4 text-[#212529] text-[15px] font-bold"
      >
        ${user.phoneno}
      </td>
      <td
        class="px-6 py-4 text-[#212529] text-[15px] font-bold"
      >
        70
      </td>
      <td class="px-6 py-4">
        <div class="flex gap-2">
          <button
            onclick="deleteUser(${user.id})"
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

async function deleteUser(id) {
  if (!confirm("Are you sure you want to delete this user?")) {
    return;
  }
  try {
    const response = await fetch(`/api/user/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
    alert("User deleted successfully");
    window.location.href = "/users";
  } catch (error) {
    console.error("Error deleting user:", error.message);
  }
}
