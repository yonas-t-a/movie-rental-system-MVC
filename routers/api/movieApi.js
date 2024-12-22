import express from 'express'

import {
    getMovies,
    getMovieById,
    updateMovie,
    createMovie,
    deleteMovie
} from '../../controller/movieController.js'

const router = express.Router();

router.route('/')
    .get(getMovies)
    .post(createMovie)
    .put(updateMovie)
    .delete(deleteMovie)
router.route('/:id')
    .get(getMovieById)

export default router;