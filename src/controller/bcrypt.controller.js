const bcrypt = require("bcrypt")
const create_bcrypt = async(req,res) => {
    try {
        // Bcrypt will generate a hash password
        // const password = "MYPASSWORD"
        const password = req.body.password
        const hash_password = await bcrypt.hash(password,5)
        if(!hash_password){
            throw new Error("Something went khotu")
        }
        res.status(200).json({
            success:true,
            DATA:hash_password
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const check_hash = async(req,res) => {
    try {
        const try_password = req.params.password
        const hash_to_check_with = "$2b$05$.R5zxYucNJHbVWZQD/nsfOxcuUEzzWGJ53YM7rZyGsnUn3kaIT.zG"

        const result = await bcrypt.compare(try_password,hash_to_check_with)

        if(!result){
            throw new Error("Password did not match")
        }

        res.status(200).json({
            success:true,
            result:result
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {
    create_bcrypt,
    check_hash
}