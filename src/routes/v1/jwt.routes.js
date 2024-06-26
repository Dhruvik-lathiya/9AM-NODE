const express = require("express")
const jwt = require("jsonwebtoken")

const router = express.Router()

router.post(
    "/create-jwt",
    async(a,b) => {
        try {
            const payload = a.body
            const token = await jwt.sign(payload,"SECRET")
            b.status(200).json({
                success:true,
                DATA:token
            })
        } catch (error) {
            b.status(400).json({
                success:false,
                message:error.message
            })
        }
    }
)

router.post(
    "/decode-jwt",
    async(request,response) => {
        try {
            const token = request.body.token
            const data = await jwt.verify(token,"SECRET")
            response.status(200).json({
                success:true,
                DATA:data
            })
        } catch (error) {
            response.status(400).json({
                success:false,
                message:error.message
            })
        }
    }
)

module.exports = router