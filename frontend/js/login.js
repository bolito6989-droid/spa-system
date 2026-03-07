const API_URL = "http://localhost:4000/api/auth/login";

// Theme
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);

document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById("themeSwitch");
  themeSwitch.checked = savedTheme === "dark";

  themeSwitch.addEventListener("change", () => {
    const t = themeSwitch.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
  });

  const form = document.getElementById("loginForm");
  form.addEventListener("submit", async e => {
    e.preventDefault();

    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) return alert("Credenciales incorrectas");

    const data = await res.json();
    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  });
});