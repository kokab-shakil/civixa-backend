const express = require("express");
const nodemailer = require('nodemailer')
//  
const email = require('./email')
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(cors())

app.use('' , email)
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});