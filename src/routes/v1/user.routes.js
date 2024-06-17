const express = require("express")

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

module.exports = router