import mysql from "mysql2/promise"
import "dotenv/config"

const connection = mysql.createPool({
    host: String(process.env.HOST),
    user: String(process.env.USER),
    password: String(process.env.PASSWORD),
    database: String(process.env.DATABASE)
})


export default connection