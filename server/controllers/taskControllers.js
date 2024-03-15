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
  try {
    const [result] = await connection.query(
      "SELECT * FROM tasks ORDER BY createdAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const [result] = await connection.query(
      "SELECT * FROM tasks WHERE id = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await connection.query(
      "INSERT INTO tasks(title, description) VALUES (?, ?)",
      [title, description]
    );
    res.json({ id: result.insertId, title, description });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const result = await connection.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {}
};

export const deleteTask = async (req, res) => {
  try {
    const [result] = await connection.query("DELETE FROM tasks WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
