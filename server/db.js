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

export default mysql;
