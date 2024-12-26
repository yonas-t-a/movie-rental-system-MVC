import RentalModel from "../model/rentalModel.js"

export async function getRentals   (req,res){
    try {
        const result = await RentalModel.getAllRental();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send('Error in gatting all rentals')
    }
}
export async function getRentalID (req,res){
    const id = req.params.id
    try {
        const result  =  RentalModel.getRentalById(id);
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send('Error in gatting  rental by ID')
    }
}
export async function createRental(req,res){
    const {user_id, movie_id, rental_date, return_date } = req.body
    try {
        await RentalModel.insertRental(user_id, movie_id, rental_date, return_date)
    } catch (error) {
        res.status(500).send('Error in gatting inserting rental')
    }
}
export async function updateRental(req,res){
    const id = req.params.id;
    const  {user_id, movie_id, rental_date, return_date } = req.body

    const updatedUserId = user_id || RentalModel.rentalUser(id);
    const updatedMovieId = movie_id || RentalModel.rentalMovie(id);
    const updatedRentalDate = rental_date || RentalModel.rentalDate(id);
    const updateReturnDate = return_date || RentalModel.rentalReturnDate(id);

    try {
        await RentalModel.updateRental(id, updatedUserId, updatedMovieId, updatedRentalDate, updateReturnDate);
        res.status(200).send('The rental is sucessfully updated')
    } catch (error) {
        res.status(500).send('Error in updating rental')
    }
}
export async function deleteRental(req,res){
    const id = req.params.id;
    try {
        await RentalModel.DeleteRental(id);
        res.status(200).send("The rental is sucessfully deleted")
    } catch (error) {
        res.status(500).send('Error in delating rentals')
    }
}
