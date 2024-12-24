import mysql from 'mysql2'
import fs from 'fs'
import dotenv from 'dotenv'
import {fileURLToPath} from 'url'
import {dirname, join} from 'path'
dotenv.config()

export const pool = mysql.createPool({
    host: process.env.MySQL_HOST,
    user: process.env.MySQL_USER,
    password: process.env.MySQL_PASSWORD,
    multipleStatements: true
}).promise();


const executeSQLFile = async (filePath) => {
    try {
        const sql = fs.readFileSync(filePath, {encoding: 'utf8'})
        await pool.query(sql)
        console.log(`Query OK, for ${filePath}`)
    } catch (error) {
        console.log(`Error in Excuting ${filePath}: ${error.message}`)
    }
}

const __fileName = fileURLToPath(import.meta.url)
const __dirname = dirname(__fileName)

export const setUpDatabase = async () => {
    try {
        console.log('Seting up database ...')

        const sqlFileLocation = join(__dirname, 'schema');
        
        // Create Database and start using it
        await executeSQLFile(join(sqlFileLocation, 'create_database.sql'))


        // Create user table
        await executeSQLFile(join(sqlFileLocation, 'create_user_table.sql'))

        // create movie table
        await executeSQLFile(join(sqlFileLocation, 'create_movies_table.sql'))

        // create rental table
        await executeSQLFile(join(sqlFileLocation, 'create_rentals_table.sql'))

        console.log('database setup complated!')
    } catch (error){
        console.log(`Error in seting Up databases: ${error.message}`)
    } finally{
        pool.end()
    }
}