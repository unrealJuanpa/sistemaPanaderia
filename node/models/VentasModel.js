import db from "../database/db.js"
import { DataTypes } from "sequelize"

const VentasModel = db.define('ventas', {
    fechahora: { type: DataTypes.DATE },
    cantidadproducto: { type: DataTypes.INTEGER },
    producto: { type: DataTypes.TEXT },
    colaborador: { type: DataTypes.TEXT },
    cliente: { type: DataTypes.TEXT}
})

export default VentasModel