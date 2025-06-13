document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nik = document.getElementById("nik").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("https://3937-103-186-213-7.ngrok-free.app/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nik, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login berhasil!");

        // Simpan token kalau perlu
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        // Redirect sesuai role
        if (data.role === "petugas") {
          window.location.href = "dashboard.html";
        } else if (data.role === "ibu") {
          window.location.href = "DashboardUser.html";
        }
      } else {
        alert(data.message || "Login gagal");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Terjadi kesalahan pada server.");
    }
  });
});
