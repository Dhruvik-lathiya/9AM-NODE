const { movie_Service } = require("../services")

const create_movie = async(req,res) => {
    try {
        // Movie create in back-end
        // service

        // console.log(req.body)

        const new_movie = await movie_Service.create_movie_S(req.body)

        res.status(200).json({
            success: true,
            data: new_movie
        })
    } catch (error) {
        // try block error response
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const delete_movie = async(req,res) => {
    try {
        // const id = req.body.id
        // service => delete => DB => MongoDB
        // const result = await movie_Service.delete_movie_S(id)
        // console.log(result)
        // res => true
        // res.status(200).json({
        //     id:id
        // })



        // ==> PARAMS
        console.log(req.params)
        const id = req.params.movieid
        const result = await movie_Service.delete_movie_S(id)
        res.status(200).json({
            id:id
        })
    } catch (error) {
        // Error => response false
    }
}


module.exports = {
    create_movie,
    delete_movie
}