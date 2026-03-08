const tabla=document.getElementById("tablaClientes")

let clientes=[]

function agregarCliente(){

const nombre=document.getElementById("nombre").value
const telefono=document.getElementById("telefono").value
const email=document.getElementById("email").value

if(nombre==="") return

clientes.push({nombre,telefono,email})

mostrarClientes()

}

function mostrarClientes(){

tabla.innerHTML=""

clientes.forEach((c,index)=>{

const tr=document.createElement("tr")

tr.innerHTML=`

<td>${c.nombre}</td>
<td>${c.telefono}</td>
<td>${c.email}</td>

<td>
<button onclick="eliminarCliente(${index})">Eliminar</button>
</td>

`

tabla.appendChild(tr)

})

}

function eliminarCliente(index){

clientes.splice(index,1)

mostrarClientes()

}

function buscarCliente(){

const filtro=document.getElementById("buscar").value.toLowerCase()

const filas=tabla.getElementsByTagName("tr")

for(let fila of filas){

const nombre=fila.cells[0].textContent.toLowerCase()

fila.style.display=nombre.includes(filtro)?"":"none"

}

}

/* TEMA */

const themeToggle=document.getElementById("themeToggle")

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

function logout(){

window.location.href="login.html"

}