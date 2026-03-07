// =====================================
// SPA SYSTEM LOGIN
// Desarrollado por Intelmatic®
// =====================================

const API_URL = "http://localhost:4000/api/auth/login"

const form = document.getElementById("loginForm")
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")

// =====================================
// LOGIN
// =====================================

form.addEventListener("submit", async (e) => {

e.preventDefault()

const username = usernameInput.value.trim()
const password = passwordInput.value.trim()

if(!username || !password){

alert("Complete los campos")

return

}

try{

const response = await fetch(API_URL,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

username:username,
password:password

})

})

const data = await response.json()

if(!response.ok){

alert(data.message || "Credenciales incorrectas")
return

}

// guardar token

localStorage.setItem("token",data.token)

localStorage.setItem("user",JSON.stringify(data.user))

// redirigir

window.location.href="dashboard.html"

}catch(error){

console.error("Error:",error)

alert("No se pudo conectar con el servidor")

}

})


// =====================================
// DARK MODE
// =====================================

const themeSwitch = document.getElementById("themeSwitch")

if(themeSwitch){

const savedTheme = localStorage.getItem("theme")

if(savedTheme === "dark"){

document.body.classList.add("dark")
themeSwitch.checked = true

}

themeSwitch.addEventListener("change",()=>{

if(themeSwitch.checked){

document.body.classList.add("dark")
localStorage.setItem("theme","dark")

}else{

document.body.classList.remove("dark")
localStorage.setItem("theme","light")

}

})

}


// =====================================
// AUTO LOGIN
// =====================================

const token = localStorage.getItem("token")

if(token){

console.log("Sesión activa detectada")

}