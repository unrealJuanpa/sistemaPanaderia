import express from "express"
import { getAllClientes, getClientes, createClientes, updateClientes, deleteClientes } from "../controllers/ClientesController.js"

const router = express.Router()

router.get("/", getAllClientes);
router.get("/:id", getClientes);
router.post("/", createClientes);
router.put("/:id", updateClientes);
router.delete("/:id", deleteClientes);

export default router

