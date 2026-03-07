require("dotenv").config()

const express = require("express")
const cors = require("cors")

const authRoutes = require("./routes/auth.routes")
const appointmentsRoutes = require("./routes/appointments.routes")
const clientsRoutes = require("./routes/clients.routes")

const app = express()

app.use(cors())
app.use(express.json())

/* ===============================
   ROUTES
================================ */

app.use("/api/auth", authRoutes)

app.use("/api/appointments", appointmentsRoutes)

app.use("/api/clients", clientsRoutes)

/* ===============================
   HEALTH CHECK
================================ */

app.get("/", (req, res) => {

res.json({

service: "Spa System API",

version: "1.0",

database: "PostgreSQL",

developer: "Intelmatic®",

status: "running"

})

})

/* ===============================
   SERVER START
================================ */

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {

console.log(`🚀 Spa API running on port ${PORT}`)

})