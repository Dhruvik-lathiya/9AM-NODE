const { doc_Service } = require("../services")

const create_doc = async(req,res) => {
    try {
        // service
        const data= req.body
        const new_doc = await doc_Service.create_doc(data)
        
        if(!new_doc){
            throw new Error("Not created")
        }
        
        res.status(200).json({
            success:true,
            message:"Created",
            data: new_doc
        })

        // res
    } catch (error) {
        // res
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
const get_doc = async(req,res) => {
    try {
        // service
        const list = await doc_Service.get_list()

        if(!list){
            throw new Error("Not found")
        }
        
        res.status(200).json({
            success:true,
            message:"List found",
            data: list
        })

        // res
    } catch (error) {
        // res
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const delete_doc = async(req,res) => {
    try {
        // service
        const id = req.params.id
        const result = await doc_Service.delete_doc(id)
        res.status(200).json({
            success:true,
            message:"Deeeleted"
        })
    } catch (error) {
        // res
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {
    create_doc,
    get_doc,
    delete_doc
}