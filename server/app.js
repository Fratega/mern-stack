import express from "express";
import { PORT } from "./config.js";


import appRoutes from "./routes/appRoutes.js";
import taskRoutes from "./routes/taskRoutes.js"

const app = express();


app.use(express.json())
app.use(appRoutes);
app.use(taskRoutes)


app.listen(PORT || 3000);
console.log(`Server is listening on ${PORT}`);
