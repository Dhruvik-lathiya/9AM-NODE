const express = require("express")
const jwt = require("jsonwebtoken")

const router = express.Router()

// express.Router().get("/end-point",
//     (req,res)=>{
//         res.status(200).json({
//             success: true,
//             message: "Route got hitted"
//         })
//     }
// )
router.get("/end-point",
    (req,res)=>{
        res.status(200).json({
            success: true,
            message: "Route got hitted"
        })
    }
)

router.post(
    "/decode-token",
    async(req,res)=>{
        try {
            const token = req.body.token
            const data = await jwt.verify(token,"SECRETKEY")
            if(!data){
                throw new Error("Data not decoded")
            }
            res.status(200).json({
                success:true,
                data:data
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
    }
)
router.post(
    "/create-token",
    async(req,res)=>{
        try {
            const payload = req.body
            const token = await jwt.sign(payload,"SECRETKEY")
            console.log(token)
            if(!token){
                throw new Error("Enter signature")
            }
            res.status(200).json({
                success:true,
                message:"Token generated",
                token:token
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
    }
)

module.exports = router