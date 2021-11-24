const express = require("express");
const nodemailer = require('nodemailer')
const app = express();
const PORT = process.env.PORT || 5000;
const transporter = nodemailer.createTransport({
   host: 'smtp.zoho.com',
   port : 465,
   secure : true,
   auth : {
       user : "kukab@vortechs.io",
       pass : "DwJzEwFnrcmr"
   }
})
async function sendEmail(body) {
    console.log(body)
    const options = {
        from : "kukab@vortechs.io",
        to :  'kukabShakil1996@gmail.com' ,
        subject: `${body.email}`,
        text : body.message
    }
 const response =  transporter.sendMail(options , (err , info) => {
        if (err) {
            console.log("error" ,err)
            return
        }
        return info.response
    })
}
transporter.verify((err, success) => {
 err
   ? console.log(err)
   : console.log(`=== Server is ready to take messages: ${success} ===`);
});
module.exports.sendEmail = sendEmail