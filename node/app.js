import express from "express"
import cors from "cors"
import db from "./database/db.js"

import colaboradoresRoutes from "./routes/ColaboradoresRoutes.js"
import tipoproductoRoutes from "./routes/TipoproductoRoutes.js"
import clientesRoutes from "./routes/ClientesRoutes.js"
import productoRoutes from "./routes/ProductoRoutes.js"
import ventasRoutes from "./routes/VentasRoutes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use('/colaboradores', colaboradoresRoutes)
app.use('/tipoproducto', tipoproductoRoutes)
app.use('/clientes', clientesRoutes)
app.use('/producto', productoRoutes)
app.use('/ventas', ventasRoutes)

try 
{
    await db.authenticate()
    console.log("Conectividad con la base de datos completada!")
}
catch (error)
{
    console.log("Error de conectividad: " + error)
}

app.listen(8000, () => {
    console.log("Servidor corriendo en: http://localhost:8000/")
})

