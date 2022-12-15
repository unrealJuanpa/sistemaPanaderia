import { Sequelize } from "sequelize"

const db = new Sequelize('panaderiadb', 'root', '',{
    host:'localhost',
    dialect:"mysql"
})

export default db
