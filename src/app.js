import express from "express";

import employeesRoutes from "./routes/employees.routes.js";

import indexRoutes from "./routes/index.router.js";

import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/employees", employeesRoutes);


app.use("/", indexRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "not found" });
});


export default app;