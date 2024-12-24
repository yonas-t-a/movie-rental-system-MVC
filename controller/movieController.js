

export function getMovies(req, res ){
    res.json(testMovie)
}
export function getMovieById(req, res){
    const movie = testMovie.find((movie)=> movie.id === parseInt(req.params.id))
    if (!movie){
        res.status(406).json({'message':"No movie with the give id"})
    }
    res.json(movie)
}
export function createMovie(req, res){
    res.json(
        {"message": "Movies feuter is under construction"}
    )
}
export function updateMovie(req, res){
    res.json(
        {"message": "Movies feuter is under construction"}
    )
}
export function deleteMovie(req, res){
    res.json(
        {"message": "Movies feuter is under construction"}
    )
}