import UserModel from "../models/userModel.js"

class UserController{

    static async getTodos(req, res){
        try{
            const result = await UserModel.getTodos()
            console.log(result)
            return res.status(201).json(result)
        }catch(err){
            console.error("Seu erro", err)
            res.status(502).json({msg: "Erro no servidor!"})
            return
        }
    }

    static async getUm(req, res){
        try{
            const id = req.params.id
            const [result] = await UserModel.getUm(id)
            console.log(result)
            return res.status(201).json(result)
        }catch(err){
            console.error("Seu erro", err)
            res.status(502).json({msg: "Erro no servidor!"})
            return
        }
    }

    static async update(req, res){
        try{
            const {nome, email, senha} = req.body
            const result = await UserModel.update(nome, email, senha)
            console.log(result)
            return res.status(200).json(result)
        }catch(err){
            console.error("Seu erro", err)
            return res.status(502).json({msg: "Erro no servidor!"})
        }
    }
}

export default UserController