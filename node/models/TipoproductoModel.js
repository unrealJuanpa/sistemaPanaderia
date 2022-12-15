import db from "../database/db.js"
import { DataTypes } from "sequelize"

const TipoproductoModel = db.define('tipoproducto', {
    nombre: { type: DataTypes.TEXT}
})

export default TipoproductoModel