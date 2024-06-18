const express = require("express")
const { admin_Controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-admin",
    // cb <= controller
    admin_Controller.create_admin_C
)

router.get(
    "/list",
    // cb <= controller
    admin_Controller.get_admin_C
)

module.exports = router