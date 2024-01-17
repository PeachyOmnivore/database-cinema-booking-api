const {
    getMoviesDB,
    createMovieDB,
    getMovieByIdDB,
    updateMovieByIdDB,
} = require("../domains/movie.js");

const getMovies = async (req, res) => {
    const filter = {
        runtimeLt: req.query.runtimeLt,
        runtimeGt: req.query.runtimeGt,
    };
    console.log(filter);
    const movies = await getMoviesDB(filter);
    res.status(200).json({ movies: movies });
};

const createMovie = async (req, res) => {
    const { title, runtimeMins } = req.body;
    const newMovie = await createMovieDB(title, runtimeMins);
    res.status(201).json({ movie: newMovie });
};

const getMovieById = async (req, res) => {
    const id = Number(req.params.id);
    const foundMovie = await getMovieByIdDB(id);
    res.status(200).json({ movie: foundMovie });
};

const updateMovieById = async (req, res) => {
    const id = Number(req.params.id);
    const { title, runtimeMins } = req.body;
    const updatedMovie = await updateMovieByIdDB(id, title, runtimeMins);
    res.status(201).json({ movie: updatedMovie });
};

module.exports = {
    getMovies,
    createMovie,
    getMovieById,
    updateMovieById,
};
