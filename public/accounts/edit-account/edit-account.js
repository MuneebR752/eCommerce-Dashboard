const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
document.addEventListener("DOMContentLoaded", async function () {
  let response = await fetch(`/api/account/${id}`).then((res) => res.json());
  const account = response[0];
  const editAccountForm = document.querySelector("#edit-account-form");
  editAccountForm.innerHTML = `
        <div class="flex flex-col gap-2 my-6">
        <label class="text-xs font-semibold leading-4" for="name"
            >Name</label
        >
        <input
            value="${account.name}"
            style="background-color: #f4f4f4"
            type="text"
            name="name"
            id="name"
            class="w-full box-border text-[#6f767e] font-medium leading-6 px-4 py-2 rounded-lg border-0 outline-none"
            placeholder="Enter Name"
        />
        </div>
        <div class="flex flex-col gap-2 my-6">
        <label class="text-xs font-semibold leading-4" for="email"
            >Email</label
        >
        <input
            value="${account.email}"
            style="background-color: #f4f4f4"
            type="email"
            name="email"
            id="email"
            class="w-full box-border text-[#6f767e] font-medium leading-6 px-4 py-2 rounded-lg border-0 outline-none"
            placeholder="Enter Email"
        />
        </div>

        <div class="flex flex-col gap-2 my-6">
        <label
            class="text-xs font-semibold leading-4"
            for="password"
            >Password</label
        >
        <input
            value="${account.password}"
            style="background-color: #f4f4f4"
            type="password"
            name="password"
            id="password"
            class="w-full box-border text-[#6f767e] font-medium leading-6 px-4 py-2 rounded-lg border-0 outline-none"
            placeholder="Enter Password"
        />
        </div>
        <div class="flex flex-col gap-2 my-6">
        <label class="text-xs font-semibold leading-4" for="role"
            >Role</label
        >
        <select
            style="background-color: #f4f4f4"
            name="role"
            id="role"
            class="w-full box-border text-[#6f767e] font-medium leading-6 px-4 py-2 rounded-lg border-0 outline-none"
        >
            <option ${
              account.role === "admin" ? "selected" : ""
            } value="admin">Admin</option>
            <option ${
              account.role === "editor" ? "selected" : ""
            } value="editor">Editor</option>
            <option ${
              account.role === "viewer" ? "selected" : ""
            } value="viewer">Viewer</option>
        </select>
        </div>`;
});
async function updateAccount() {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const role = document.querySelector("#role").value;
  const response = await fetch(`/api/account/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, role }),
  }).then((res) => res.json());
  if (response.ok) {
    alert("Account updated successfully");
    window.location.href = "/accounts";
  }
}

function updateInputValue(elemnent) {
  const value = elemnent.value;
  elemnent.value = value;
}

async function deleteAccount() {
  let confirmDelete = confirm("Are you sure you want to delete this account?");

  if (confirmDelete) {
    try {
      const response = await fetch(`/api/account/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete account");
      }
      alert("Account deleted successfully");
      location.href = "/accounts";
    } catch (error) {
      console.error("Error deleting account:", error.message);
    }
  }
}
