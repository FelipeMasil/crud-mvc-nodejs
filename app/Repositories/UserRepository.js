import db from '../database/conn.js'

class UserRespository {

    async findAll() {
        try {
            const sql = 'SELECT * FROM USUARIOS;'
            const [rows] = await db.query(sql)
            return rows
        } catch (error) {
            return error
        }
    }

    async findById(id) {
        try {
            const sql = `SELECT * FROM USUARIOS WHERE ID = '${id}'`
            const [rows] = await db.query(sql);
            return rows
        } catch (error) {
            return error
        }
    }

    async create(nome, email, idade) {
        try {
            const arr = [nome, email]
            const newArr = arr.map(ar => ar.toUpperCase());
            const result = await db.query(`INSERT INTO USUARIOS (NOME, EMAIL, IDADE) VALUES ('${newArr[0]}', '${newArr[1]}', '${idade}');`)
            return result
        } catch (error) {
            return error
        }
    }
}

export default new UserRespository();