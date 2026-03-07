const API = "http://localhost:4000/api/appointments";
const token = localStorage.getItem("token");

fetch(API, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => res.json())
  .then(data => {
    const tbody = document.getElementById("appointmentsTable");
    data.forEach(a => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${a.client_name}</td>
        <td>${a.service}</td>
        <td>${a.appointment_date}</td>
        <td>${a.status}</td>
      `;
      tbody.appendChild(tr);
    });
  });