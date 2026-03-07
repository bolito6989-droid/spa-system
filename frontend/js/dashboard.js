const tabla = document.getElementById("tablaCitas")

const clientesTotal = document.getElementById("clientesTotal")

const citasHoy = document.getElementById("citasHoy")

async function cargarDashboard(){

try{

const resClientes = await fetch("http://localhost:4000/api/clients")

const clientes = await resClientes.json()

clientesTotal.innerText = clientes.length


const resCitas = await fetch("http://localhost:4000/api/appointments")

const citas = await resCitas.json()

tabla.innerHTML=""

let hoy = new Date().toISOString().split("T")[0]

let contadorHoy=0

citas.forEach(c=>{

if(c.date===hoy){

contadorHoy++

}

let tr = document.createElement("tr")

tr.innerHTML=`

<td>${c.client_name || "Cliente"}</td>
<td>${c.service}</td>
<td>${c.date}</td>
<td>${c.time}</td>

`

tabla.appendChild(tr)

})

citasHoy.innerText = contadorHoy

}catch(error){

console.log(error)

}

}

cargarDashboard()