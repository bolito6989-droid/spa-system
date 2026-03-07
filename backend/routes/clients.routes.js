const express = require("express");
const router = express.Router();
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "spa_system",
  port: 5432
});

router.get("/", async (req,res)=>{

try{

const result = await pool.query("SELECT * FROM clients ORDER BY id DESC");

res.json(result.rows);

}catch(err){

res.status(500).json({error:err.message});

}

});


router.post("/", async (req,res)=>{

const {full_name,phone,email} = req.body;

try{

const result = await pool.query(

`INSERT INTO clients (full_name,phone,email)
VALUES ($1,$2,$3)
RETURNING *`,

[full_name,phone,email]

);

res.json(result.rows[0]);

}catch(err){

res.status(500).json({error:err.message});

}

});


router.put("/:id", async (req,res)=>{

const id=req.params.id;

const {full_name,phone,email}=req.body;

try{

const result=await pool.query(

`UPDATE clients
SET full_name=$1,phone=$2,email=$3
WHERE id=$4
RETURNING *`,

[full_name,phone,email,id]

);

res.json(result.rows[0]);

}catch(err){

res.status(500).json({error:err.message});

}

});


router.delete("/:id", async (req,res)=>{

const id=req.params.id;

try{

await pool.query("DELETE FROM clients WHERE id=$1",[id]);

res.json({message:"cliente eliminado"});

}catch(err){

res.status(500).json({error:err.message});

}

});

module.exports = router;