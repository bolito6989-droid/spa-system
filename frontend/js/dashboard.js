const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);

const themeSwitch = document.getElementById("themeSwitch");
themeSwitch.checked = savedTheme === "dark";

themeSwitch.addEventListener("change", () => {
  const t = themeSwitch.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
});

document.getElementById("currentDate").textContent =
  new Date().toLocaleDateString("es-EC", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

document.getElementById("logoutBtn").onclick = () => {
  localStorage.clear();
  window.location.href = "login.html";
};