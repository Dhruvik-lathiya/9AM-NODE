const express = require("express")
const { bcrypt_Controller } = require("../../controller")
const router = express.Router()

router.post(
    "/hash-generate",
    // callback
    bcrypt_Controller.create_bcrypt
)

router.post(
    "/hash-compare/:password",
    // callback
    bcrypt_Controller.check_hash
)

module.exports = router