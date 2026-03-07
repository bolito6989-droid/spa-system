const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const pool = require("../config/db");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query(
    "SELECT * FROM users WHERE username = $1",
    [email]
  );

  if (result.rows.length === 0) {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }

  const user = result.rows[0];
  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role,
      name: user.full_name
    },
    process.env.JWT_SECRET,
    { expiresIn: "8h" }
  );

  res.json({
    token,
    user: {
      name: user.full_name,
      role: user.role
    },
    developer: "Intelmatic®"
  });
});

// VALIDAR TOKEN
router.get("/validate", authMiddleware, (req, res) => {
  res.json({
    valid: true,
    user: req.user,
    developer: "Intelmatic®"
  });
});

module.exports = router;
