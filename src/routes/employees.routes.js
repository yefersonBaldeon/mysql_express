import { Router } from "express";
import { pool } from "../db.js";

import {getOneEmployees, getEmployees, createEmployees, updareEmployees, deleteEmployees } from "../controllers/employees.controller.js";

const router = Router();

router.get("/", getEmployees);
router.get("/:id", getOneEmployees);


router.post("/", createEmployees);
router.patch("/:id", updareEmployees);
router.delete("/:id", deleteEmployees);



export default router;
    