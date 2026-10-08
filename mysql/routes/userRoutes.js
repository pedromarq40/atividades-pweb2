import UserController from "../controllers/userController.js"
import Router from 'express'

const UserRouter = Router()

UserRouter.get("/:offset/:on", UserController.getTodos)
UserRouter.get("/:id", UserController.getUm)
UserRouter.post("/", UserController.update)

export default UserRouter