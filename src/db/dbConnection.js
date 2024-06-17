const mongoose = require("mongoose")

const connectDB = () => {
    mongoose.connect("mongodb+srv://dhruviklathiya0811:qJh1G2Iqtiqvit8d@netflix.zsyyd8a.mongodb.net/").then((data)=>{
        if(data){
            console.log("Database connected successfully ^-^")
        }
    }).catch((err)=>{
        console.log(err);
    })
}


module.exports = connectDB