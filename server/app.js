import { PORT } from "./config.js";
import express from "express";
import pkg from "cors";
const { cors } = pkg;

import appRoutes from "./routes/appRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

app.disable("x-powered-by"); // deshabilitar el header X-Powered-By: Express

//Middleware
app.use(pkg());
app.use(express.json());

// Rutas
app.use(appRoutes);
app.use(taskRoutes);

app.listen(PORT || 3000);
console.log(`Server is listening on ${PORT}`);
