import express from "express"
import { getAllColaboradores, getColaboradores, createColaboradores, updateColaboradores, deleteColaboradores } from "../controllers/ColaboradoresController.js"

const router = express.Router()

router.get("/", getAllColaboradores);
router.get("/:id", getColaboradores);
router.post("/", createColaboradores);
router.put("/:id", updateColaboradores);
router.delete("/:id", deleteColaboradores);

export default router

