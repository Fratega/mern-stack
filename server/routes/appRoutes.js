import { Router } from "express";
import mysql from "mysql2/promise";
const router = Router();

const config = {
  host: "localhost",
  user: "root",
  port: "3307",
  password: "",
  database: "tasksdb",
};
const connectionString = process.env.DATABASE_URL ?? config;
const connection = await mysql.createConnection(connectionString);

router.get("/ping", async (req, res) => {
  const [rows] = await connection.query("SELECT 1 + 1 as result");
  console.log(rows);
  res.json(rows);
});

export default router;
