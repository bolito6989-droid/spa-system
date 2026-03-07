const form = document.getElementById("loginForm")

form.addEventListener("submit",(e)=>{

e.preventDefault()

const username=document.getElementById("username").value
const password=document.getElementById("password").value

if(username==="admin" && password==="admin"){

localStorage.setItem("token","demo")

window.location.href="dashboard.html"

}else{

alert("Credenciales incorrectas")

}

})