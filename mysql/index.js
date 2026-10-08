import express from "express"
import UserRouter from "./routes/userRoutes.js"
import "dotenv/config"

const app = express()

app.use("users", UserRouter)

const PORT = process.env.PORT 

app.listen(PORT, () => {
    console.log(`Rodando em localhost:${PORT}`)
})