const themeToggle=document.getElementById("themeToggle")

/* TEMA */

const savedTheme=localStorage.getItem("theme")

if(savedTheme==="light"){

document.body.classList.add("light")

themeToggle.innerText="☀️"

}

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("light")

if(document.body.classList.contains("light")){

localStorage.setItem("theme","light")

themeToggle.innerText="☀️"

}else{

localStorage.setItem("theme","dark")

themeToggle.innerText="🌙"

}

})

/* LOGOUT */

function logout(){

localStorage.removeItem("token")

window.location.href="login.html"

}

/* DEMO DATA */

document.getElementById("clientesTotal").innerText=24

document.getElementById("citasHoy").innerText=6

const tabla=document.getElementById("tablaCitas")

const citas=[

{cliente:"Ana",servicio:"Masaje",fecha:"2026-03-07",hora:"10:00"},
{cliente:"Luis",servicio:"Facial",fecha:"2026-03-07",hora:"11:30"},
{cliente:"Maria",servicio:"Spa",fecha:"2026-03-07",hora:"14:00"}

]

citas.forEach(c=>{

const tr=document.createElement("tr")

tr.innerHTML=`

<td>${c.cliente}</td>
<td>${c.servicio}</td>
<td>${c.fecha}</td>
<td>${c.hora}</td>

`

tabla.appendChild(tr)

})