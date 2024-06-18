const express = require("express")
const connectDB = require("./db/dbConnection")
const router = require("./routes/v1")

// Initialise||ze => express into a variable
const app = express()

const PORT = 4949

app.listen(PORT,
    ()=>{
            console.log("Server is running on port" + PORT)
    }
)

app.use(express.json())


app.use("/v1",router)
app.use("/v2",router)
app.use("/v3",router)
app.use("/v4",router)

connectDB()


// CRUD
// REPL
// SOFTWARE
// FOLDER
// LINK
// METHOD


// URL
// SERVER LOCATION
// NAMESPACE => "/V1","/V2"
// LINKING PHRASE
// END-POINT