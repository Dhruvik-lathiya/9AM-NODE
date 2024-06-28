const { admin_Service } = require("../services")
const nodemailer = require("nodemailer")

const create_admin_C = async(req,res) => {
    try {
        // service => admin create
        const data = req.body
        const new_admin = await admin_Service.create_admin_S(data)


        if(!new_admin){
            throw new Error("Something went wrong")
        }


        // Send mail to admin email

        // nodemailer
        // transport <= nodemailer.createtransport(login_info)
        // {
        // host: smtp.gmail.com,
        // port: 587,
        // auth: {
        //          user:"dhruviklathiya0811@gmail.com"
        //          pass:"gatayfphxfziqjsk"
        //          }
        // }

        const transport = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                    user:"dhruviklathiya0811@gmail.com",
                    pass:"gatayfphxfziqjsk"
                 }
        })


        // const mail_sent = await transport.sendMail(mail_info)
        // const mail_sent = await transport.sendMail(from,to,subject,data)
        const mail_sent = await transport.sendMail(
            {
                from:"dhruviklathiya0811@gmail.com",
                to:"princedonga41@gmail.com",
                subject:"On this subject: DEMO MAIL",
                text:"This is a nodemailer mail, This is a nodemailer mail, This is a nodemailer mail, This is a nodemailer mail, This is a nodemailer mail, This is a nodemailer mail, This is a nodemailer mail, This is a nodemailer mail, This is a nodemailer mail, This is a nodemailer mail, This is a nodemailer mail, This is a nodemailer mail, "
            }
        )

        if(!mail_sent){
            throw new Error("Try again")
        }


        res.status(200).json({
            success: true,
            message:"Admin created successfully & mail sent successfully",
            data: new_admin
        })

    } catch (error) {
        // !admin
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}

const get_admin_C = async(req,res) => {
    try {
        // service <= services => DATA
        const admin_list = await admin_Service.get_admin_S()

        if(!admin_list){
            throw new Error("Data not found")
        }

        res.status(200).json({
            success: true,
            data: admin_list
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_admin_C,
    get_admin_C
}