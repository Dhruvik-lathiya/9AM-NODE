const express = require("express")
const userRoute = require("./user.routes")
const movieRoute = require("./movie.routes")
const seriesRoute = require("./series.routes")

const router = express()

router.use("/linking-phrase",userRoute)
router.use("/movie",movieRoute)
router.use("/series",seriesRoute)

module.exports = router