const mongoose = require("mongoose")

const city_Schema = mongoose.Schema(
    {
        city_name:{
            type:String,
            trim:true
        },
        // populate state
        sttttate:{
            type:mongoose.Types.ObjectId,
            ref:"State"
        },
        country:{
            type:mongoose.Types.ObjectId,
            ref:"Country"
        }
        // Specific populate of admin
        // admin:{
        //     type:mongoose.Types.ObjectId,
        //     ref:"Admin"
        // }
    },
    {
        timestamps:true
    })

const city = mongoose.model("City",city_Schema)
module.exports = city