import express from 'express'

import {
    createRental,
    getRentals,
    getRentalID,
    updateRental,
    deleteRental,
} from '../../controller/rentalController.js'

const router = express.Router();

router.route('/')
    .get(getRentals)
    .post(createRental)
    .put(updateRental)
    .delete(deleteRental)
router.route('/:id')
    .get(getRentalID)

export default router;