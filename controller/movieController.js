const testMovie = [
    {
        "id": 1,
        "title": "movie_test_1",
        "gener": "test_gener_1",
        "release_year": 2024
    },
    {
        "id": 2,
        "title": "movie_test_1",
        "gener": "test_gener_2",
        "release_year": 2024
    }
]

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