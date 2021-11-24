const express = require("express");
const Joi = require('joi')
const router = express()
const { sendEmail } = require('./SendEmail')
 
router.post('/register', async (req, res) => {
    const schema = Joi.object({
        email: Joi.string(),
    })

    sendEmail(req.body)
    res.status(200).send ({
        status: true,
    })
  
})


module.exports = router
 
