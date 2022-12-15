import db from "../database/db.js"
import { DataTypes } from "sequelize"

const ProductoModel = db.define('producto', {
    nombre: { type: DataTypes.TEXT },
    descripcion: { type: DataTypes.TEXT },
    precio: { type: DataTypes.INTEGER },
    tipoproducto: { type: DataTypes.TEXT}
})

export default ProductoModel