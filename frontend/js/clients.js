const API="http://localhost:4000/api/clients"

async function loadClients(){

const res=await fetch(API)

const clients=await res.json()

const table=document.getElementById("clientsTable")

table.innerHTML=""

clients.forEach(client=>{

const row=`

<tr>

<td>${client.id}</td>

<td>${client.full_name}</td>

<td>${client.phone || ""}</td>

<td>${client.email || ""}</td>

<td>

<button class="delete" onclick="deleteClient(${client.id})">Eliminar</button>

</td>

</tr>

`

table.innerHTML+=row

})

}

async function createClient(){

const name=document.getElementById("name").value

const phone=document.getElementById("phone").value

const email=document.getElementById("email").value

await fetch(API,{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

full_name:name,

phone:phone,

email:email

})

})

document.getElementById("name").value=""
document.getElementById("phone").value=""
document.getElementById("email").value=""

loadClients()

}

async function deleteClient(id){

await fetch(API+"/"+id,{

method:"DELETE"

})

loadClients()

}

loadClients()