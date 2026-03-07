require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const appointmentsRoutes = require("./routes/appointments.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentsRoutes);

app.get("/", (_, res) => {
  res.json({
    service: "Spa System API",
    database: "PostgreSQL",
    developer: "Intelmatic®",
    status: "OK"
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Spa Backend running on port ${PORT}`);
});