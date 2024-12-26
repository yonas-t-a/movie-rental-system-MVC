import MovieModel from "../model/movieModel.js"

export async function getMovies(req, res ){
    try {
        const result = await MovieModel.getAllMovie();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send('Error in Fetching all the Movies')
    }
}
export async function getMovieById(req, res){
    const id = req.params.id;
    try {
        const result = await MovieModel.getMovieById(id);
    } catch (error) {
        res.status(500).send('Error in Fetching the Movie with ID')
    }
}
export async  function createMovie(req, res){
    const {title, genre, release_year} = req.body;
    try {
        await MovieModel.insertMovie(title, genre, release_year)
    } catch (error) {
        res.status(500).send('Error in insering the umovie into the database')
    }

}
export async function updateMovie(req, res){
    const id = req.params.id
    const {title, genre, release_year} = req.body;

    const updatedTitle = title || MovieModel.movieTitle(id)
    const updatedGenre = genre || MovieModel.movieGenre(id)
    const updatedReleaseYear = release_year || MovieModel.movieReleaseYear(id)

    try {
        await MovieModel.updateMovie(id, updatedTitle, updatedGenre, updatedReleaseYear);
    } catch (error) {
        res.status(500).send('Error in updating the Movie')
    }
}
export async function deleteMovie(req, res){
    const id = req.params.id;
    try {
        await MovieModel.deleteMovie(id)
    } catch (error) {
        res.status(500).send('Error in Delating the Movie')
    }
}