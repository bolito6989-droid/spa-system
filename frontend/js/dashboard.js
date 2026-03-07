const API="http://localhost:4000/api"

async function loadDashboard(){

try{

const res=await fetch(API+"/clients")

const clients=await res.json()

document.getElementById("totalClients").innerText=clients.length

}catch(e){

console.log("API no disponible")

}

}

loadDashboard()