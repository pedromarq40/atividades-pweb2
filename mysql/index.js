import express from "express"
import connection from "./db.js"

const app = express()
const PORT = process.env.PORT
const db = connection

app.use(express.json())

app.get("/users", async (req, res) => {
    try{
        const [result] = await db.query("SELECT * FROM users")
        console.log(result)
        return res.status(201).json(result)
    }catch(err){
        console.error("Seu erro", err)
        res.status(502).json({msg: "Erro no servidor!"})
        return
    }
})

app.get("/users/:id", async (req, res) => {
    try{
        const id = req.params.id
        const [result] = await db.query(`SELECT * FROM users WHERE id = ${id}`)
        console.log(result)
        return res.status(201).json(result)
    }catch(err){
        console.error("Seu erro", err)
        res.status(502).json({msg: "Erro no servidor!"})
        return
    }
})

app.post("/users", async (req, res) => {
    try{
        const {nome, email, senha} = req.body
        const [result] = await db.query("INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)", [nome, email, senha])
        console.log(result)
        return res.status(200).json(result)
    }catch(err){
        console.error("Seu erro", err)
        return res.status(502).json({msg: "Erro no servidor!"})
    }
})

app.listen(PORT, () => {
    console.log(`Bixo ta rodando já`)
})