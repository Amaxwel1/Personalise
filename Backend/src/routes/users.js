import express from "express";
import { getUsers } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

// router.post("/cadastro", cadUsers);

export default router;