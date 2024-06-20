const { Movie } = require("../model")


const create_movie_S = (data) => {
    // console.log("Servicewssssss");
    return Movie.create(data)
}

const delete_movie_S = (id) => {
    return Movie.findByIdAndDelete(id)
}

module.exports = {
    create_movie_S,
    delete_movie_S
}