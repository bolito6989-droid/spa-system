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

localStorage.removeItem("token")

window.location.href="login.html"

}

/* CHART */

const ctx=document.getElementById("revenueChart")

new Chart(ctx,{

type:"line",

data:{

labels:["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"],

datasets:[{

label:"Ingresos",

data:[150,220,180,300,250,400,350],

borderColor:"#06b6d4",

backgroundColor:"rgba(6,182,212,0.2)",

tension:0.4,

fill:true

}]

},

options:{

plugins:{
legend:{display:false}
}

}

})