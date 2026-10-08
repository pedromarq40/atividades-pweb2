import mysql from "mysql2/promise"
import "dotenv/config"

const connection = mysql.createPool({
    host: String(process.env.HOST),
    user: String(process.env.USER),
    password: String(process.env.PASSWORD),
    database: String(process.env.DATABASE)
})

connection.query(`CREATE TABLE IF NOT EXISTS Aluno (
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) PRIMARY KEY,
    senha VARCHAR(20) NOT NULL
)`)

console.log("MySql Conectado") 

export default connection