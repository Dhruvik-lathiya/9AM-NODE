const express = require("express")
const { movie_Controller } = require("../../controller")

const router = express.Router()


router.post(
    "/create-movie",
    // callaback || controller
    movie_Controller.create_movie
)

router.delete(
    "/delete-movie/:movieid/:BRTSBUS/:SMC",
    // cb || callback || controller || business logic || driver code || function
    movie_Controller.delete_movie
)

router.get(
    "/list",
    // callback || controller
    (req,res) => {
        try {
            res.status(200).json({
                success: true,
                message: "Route got hitted"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }
)

module.exports = router