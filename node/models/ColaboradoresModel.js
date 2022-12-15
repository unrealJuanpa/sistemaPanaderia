import db from "../database/db.js"
import { DataTypes } from "sequelize"

const ColaboradoresModel = db.define('colaboradores', {
    usuario: { type: DataTypes.TEXT },
    contrasenia: { type: DataTypes.TEXT },
    nombre: { type: DataTypes.TEXT },
    dpi: { type: DataTypes.TEXT },
    telefono: { type: DataTypes.TEXT },
    nivelacceso: { type: DataTypes.INTEGER}
})

export default ColaboradoresModel