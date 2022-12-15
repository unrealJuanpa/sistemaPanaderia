import express from "express"
import { getAllVentas, getVentas, createVentas, updateVentas, deleteVentas } from "../controllers/VentasController.js"

const router = express.Router()

router.get("/", getAllVentas);
router.get("/:id", getVentas);
router.post("/", createVentas);
router.put("/:id", updateVentas);
router.delete("/:id", deleteVentas);

export default router

