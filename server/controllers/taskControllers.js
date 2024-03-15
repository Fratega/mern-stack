import mysql from "mysql2/promise";

const config = {
  host: "localhost",
  user: "root",
  port: "3307",
  password: "",
  database: "tasksdb",
};
const connectionString = process.env.DATABASE_URL ?? config;
const connection = await mysql.createConnection(connectionString);

export const getTasks = async (req, res) => {
  const [result] = await connection.query(
    "SELECT * FROM tasks ORDER BY createdAt ASC"
  );
  res.json(result);
};

export const getTask = async (req, res) => {
  const [result] = await connection.query(
    "SELECT * FROM tasks WHERE id = ?",
    [req.params.id]
  );
  res.json(result[0]);
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const [result] = await connection.query(
    "INSERT INTO tasks(title, description) VALUES (?, ?)",
    [title, description]
  );
  res.json({ id: result.insertId, title, description });
};

export const updateTask = (req, res) => {
  res.send("Editando tarea");
};

export const deleteTask = (req, res) => {
  res.send("Eliminando tarea");
};
