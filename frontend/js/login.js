const form = document.getElementById("loginForm")

const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")

const error = document.getElementById("error")

const datetime = document.getElementById("datetime")

const themeToggle = document.getElementById("themeToggle")

/* RELOJ */

function updateTime(){

const now = new Date()

datetime.innerText = now.toLocaleString()

}

setInterval(updateTime,1000)

updateTime()

/* TEMA */

const savedTheme = localStorage.getItem("theme")

if(savedTheme === "light"){

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

/* LOGIN DEMO */

form.addEventListener("submit",(e)=>{

e.preventDefault()

const username = usernameInput.value
const password = passwordInput.value

error.innerText=""

if(username==="admin" && password==="admin"){

localStorage.setItem("token","demo")

window.location.href="dashboard.html"

}else{

error.innerText="Credenciales incorrectas"

}

})