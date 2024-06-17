const { series_Service } = require("../services")

const create_series = async(req,res) => {
    try {
        const data = req.body
        // service
        const new_series = await series_Service.create_series_S(data)
        // success response
        res.status(200).json({
            success: true,
            data: new_series
        })
    } catch (error) {
        // error response
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_series
}