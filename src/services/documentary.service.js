const { Doc } = require("../model")

const create_doc = (data) => {
    return Doc.create(data)
}

const get_list = () => {
    return Doc.find()
    return Doc.findOne()
}

const delete_doc = () => {
    // return Doc.findByIdAndDelete(id)
    return Doc.deleteMany()
}

module.exports = {
    create_doc,
    get_list,
    delete_doc
}