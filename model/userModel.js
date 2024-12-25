import { pool } from "../database.js";

const UserModel = {
    insertUser: async (name, email) => {
        const query = 'INSERT INTO user (name, email) VALUES (?,?)'
        try {
            await pool.query(query, [name, email])
        } catch (error) {
            console.log(`Error in inserting USER: ${error.message}`)
        }
    },
    getAllUser: async ()=>{
        const query = 'SELECT * FROM user'
        try {
            const [rows] =  await pool.query(query)
            return rows
        } catch (error) {
            console.log(`Error in inserting USER: ${error.message}`)
        }
    },
    getUserbyId: async (id)=>{
        const query = 'SELECT * FROM USER WHERE id=?'
        try {
            const [row] = pool.query(query, [id])
            return row;
        } catch (error) {
            console.log(`Error in inserting USER: ${error.message}`)
        }
    },
    
    updateUser: async (id, name  , email)=>{
        const query = 'UPDATE user SET name=?, email=? WHERE id=?'
        try {
            await pool.query(query, [name, email, id])
        } catch (error) {
            console.log(`Error in inserting USER: ${error.message}`)
        }
    },
    deleteUser: async (id)=>{
        const query = 'DELETE FROM user WHERE id=?'
        try {
            await pool.query(query, [id])
        } catch (error) {
            console.log(`Error in inserting USER: ${error.message}`)
        }
    },
}

export default UserModel