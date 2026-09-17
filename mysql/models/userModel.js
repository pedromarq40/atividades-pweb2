import connection from "../db.js"

class UserModel {

    static async getTodos(){
        const [result] = await db.query("SELECT * FROM users")
        return result
    }

    static async getUm(id){
        const [result] = await db.query("SELECT * FROM users WHERE id = (?)", [id])
        return result
    }

    static async update(nome, email, senha){
        const [result] = await db.query(
            "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)", [nome, email, senha])
        return result
    }

}

export default UserModel