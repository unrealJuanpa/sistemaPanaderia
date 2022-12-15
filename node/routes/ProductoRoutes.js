import express from "express"
import { getAllProducto, getProducto, createProducto, updateProducto, deleteProducto } from "../controllers/ProductoController.js"

const router = express.Router()

router.get("/", getAllProducto);
router.get("/:id", getProducto);
router.post("/", createProducto);
router.put("/:id", updateProducto);
router.delete("/:id", deleteProducto);

export default router

