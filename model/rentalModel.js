import { pool } from "../database.js";

const RentalModel = {
    rentalUser: async(id) => {
        const query = `
                SELECT user.name, user.email
                FROM rentals
                INNER JOIN user ON  rentals.user_id = user.id
                WHERE rentals.id = ?
            `
        try {
            const [data] = await pool.query(query, [id])
            return data
        } catch (error) {
            console.log('Error in Fetching rental User')
        }
    },
    rentalMovie: async(id)=>{
        const query = `
            SELECT movies.title, movies.release_year
            FROM rentals
            INNER JOIN movies ON rentals.movie_id = movies.id
            WHERE rentals.id = ?
        `
        try { 
            const [data] =  await pool.query(query, [id])
            return data
        } catch (error) {
            console.log('Error in Fetching rental Movies')
        }
    },
    rentalDate: async(id)=>{
        const query = `
            SELECT rental_date
            FROM rentals
            WHERE id=?
        `
        try {
            const [data] = pool.query(query, [id])
            return data
        } catch (error) {
            console.log('Error in fetching rentalDate for rentals')   
        }
    },
    rentalReturnDate: async(id)=>{
        const query = `
            SELECT return_date
            FROM rentals
            WHERE id=?
        `
        try {
            const [data] = pool.query(query, [id])
            return data
        } catch (error) {
            console.log('Error in fetching rentalDate for rentals')   
        }
    },
    insertRental: async (user_id, movie_id, rental_date, return_date)=>{
        const query = `        
            INSERT INTO rentals (user_id, movie_id, rental_date, return_date)
            VALUES (?,?,?,?)
        `
        try {
            await pool.query(query ,[user_id, movie_id, rental_date, return_date])
        } catch (error) {
            console.log('Error in inserting rental')
        }
    }, 
    getAllRental: async () => {
        const query = `
            SELECT rentals.id, user.name as name, user.email as email, movie.title as movie, rentals.rental_date, rentals.return_date
            FROM rentals 
            INNER JOIN user ON user.id = rentals.user_id
            INNER JOIN movies ON movies.id = rentals.movie_id
        `
        try {
            const [data] = await pool.query(query)
            return data
        } catch (error) {
            console.log('Error in getting all retals')
        }
    },
    getRentalById: async (id) => {
        const query = `
            SELECT rentals.id, user.name as name, user.email as email, movie.title as movie, rentals.rental_date, rentals.return_date
            FROM rentals 
            INNER JOIN user ON user.id = rentals.user_id
            INNER JOIN movies ON movies.id = rentals.movie_id
            WHERE rentals.id = ?
        `
        try {
            const [data] = await pool.query(query, [id])
            return data
        } catch (error) {
            console.log('Error in getting all retals')
        }
    },
    updateRental: async (id, user_id, movie_id, rental_date, return_date) => {
        const query = `
            UPDATE rentals SET user_id=?, movie_id=?, rental_date = ?, return_date=?
            WHERE id = ?
        `
        try {
            await pool.query(query, [user_id, movie_id, rental_date, return_date])
        } catch (error) {
            console.log('Error in updating rental')
        }
    },
    DeleteRental: async (id) => {
        const query = `
            DELETE FROM rentals
            WHERE id = ?
        `
        try {
            await pool.query(query, [id])
        } catch (error) {
            console.log('Error in delaring the rental')
        }
    }
}

export default RentalModel;