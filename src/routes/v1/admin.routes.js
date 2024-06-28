const express = require("express")
const { admin_Controller } = require("../../controller")
const { admin_Validation } = require("../../validations")

const router = express.Router()

router.post(
    "/create-admin",
    // cb <= controller,
    // Validation callback <= next()
    admin_Validation.create_admin_V,
    // cb <= controller
    admin_Controller.create_admin_C
)

router.get(
    "/list",
    // cb <= controller
    admin_Controller.get_admin_C
)

module.exports = router