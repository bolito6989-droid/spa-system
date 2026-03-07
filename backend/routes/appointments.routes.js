const express = require("express");
const pool = require("../config/db");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

// LISTAR CITAS
router.get("/", authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM appointments ORDER BY appointment_date, appointment_time"
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener citas" });
  }
});

// CREAR CITA
router.post("/", authMiddleware, async (req, res) => {
  const {
    client_name,
    service,
    therapist,
    appointment_date,
    appointment_time,
    notes
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO appointments
       (client_name, service, therapist, appointment_date, appointment_time, notes)
       VALUES ($1,$2,$3,$4,$5,$6)
       RETURNING *`,
      [
        client_name,
        service,
        therapist,
        appointment_date,
        appointment_time,
        notes
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error al crear cita" });
  }
});

module.exports = router;