const express = require("express")
const { doc_Controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-doc",
    // cb
    doc_Controller.create_doc
)
router.get(
    "/list",
    // cb
    doc_Controller.get_doc
)
router.delete(
    "/delete/:id",
    // cb
    doc_Controller.delete_doc
)


module.exports = router