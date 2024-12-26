import { pool } from "../database.js";

const MovieModel = {
    movieTitle: async (id) => {
        const query = 'SELECT title FROM movies WHERE id=?'
        try {
            const [data] = await pool.query(query, [id])
            return data
        } catch (error) {
            console.log(`Error in obtaining movie Title: ${error.message}`)
        }
    },
    movieGenre: async (id) => {
        const query = 'SELECT genre FROM movies WHERE id=?'
        try {
            const [data] = await pool.query(query, [id])
            return data
        } catch (error) {
            console.log(`Error in obtaining movie genre: ${error.message}`)
        }
    },
    movieReleaseYear: async (id) => {
        const query = 'SELECT genre FROM movies WHERE id=?'
        try {
            const [data] = await pool.query(query, [id])
            return data
        } catch (error) {
            console.log(`Error in obtaining movie genre: ${error.message}`)
        }
    },
    insertMovie: async (title, genre, release_year) => {
        const query = 'INSERT INTO movies (title, genre, release_year) VALUES (?,?,?)'
        try {
            await pool.query(query, [title, genre, release_year])
        } catch (error) {
            console.log(`Error in inserting Movie: ${error.message }`)
        }
    },
    getAllMovie: async () => {
        const query = 'SELECT * FROM movies'
        try {
            const [data] = await pool.query(query)
            return data
        } catch (error) {
            console.log(`Error in gatting all Movie: ${error.message}`)
        }
    },
    getMovieById: async (id) => {
        const query = 'SELECT * FROM movies WHERE id=?'
        try {
            const [row] = await pool.query(query, [id])
            return row
        } catch (error) {
            console.log(`Error in getting Movie By id: ${error.message}`)
        }
    }, 
    updateMovie: async (id, title, genre, release_year) => {
        const query = 'UPDATE movies SET title=?, genre=?, release_year=? WHERE id=?'
        try {
            await pool.query(query, [title, genre, release_year])
        } catch (error) {
            console.log(`Error in updating Movie: ${error.message}`)
        }
    },
    deleteMovie: async (id) => {
        const query = 'DELETE FROM movies WHERE id=?'
        try {
            await pool.query(query, [id])
        } catch (error) {
            console.log(`Error in delating Movie: ${error.message}`)
        }
    }
}

export default MovieModel;