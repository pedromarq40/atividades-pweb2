import express from "express"
import UserRouter from "./routes/userRoutes.js"

const app = express()

app.use("users", UserRouter)

app.listen(PORT, () => {
    console.log(`Rodando em localhost`)
})