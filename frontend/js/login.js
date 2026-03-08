const form = document.getElementById("loginForm")

const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")

const error = document.getElementById("error")

const datetime = document.getElementById("datetime")

const themeToggle = document.getElementById("themeToggle")

const loader = document.getElementById("loader")

const loginButton = document.getElementById("loginButton")

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

/* LOGIN */

form.addEventListener("submit",(e)=>{

e.preventDefault()

const username = usernameInput.value
const password = passwordInput.value

error.innerText=""

loader.style.display="block"

loginButton.style.display="none"

setTimeout(()=>{

if(username==="admin" && password==="admin"){

window.location.href="dashboard.html"

}else{

loader.style.display="none"

loginButton.style.display="block"

error.innerText="Credenciales incorrectas"

}

},1200)

})