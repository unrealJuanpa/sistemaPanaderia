import express from "express"
import { getAllTipoproducto, getTipoproducto, createTipoproducto, updateTipoproducto, deleteTipoproducto } from "../controllers/TipoproductoController.js"

const router = express.Router()

router.get("/", getAllTipoproducto);
router.get("/:id", getTipoproducto);
router.post("/", createTipoproducto);
router.put("/:id", updateTipoproducto);
router.delete("/:id", deleteTipoproducto);

export default router

