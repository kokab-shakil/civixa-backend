const express = require("express");
const nodemailer = require('nodemailer')
//  
const email = require('./email')
const app = express();
const cors = require('cors')
const corsOptions ={
    origin:'https://git.heroku.com/civixa-backened.git', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(cors(corsOptions))

app.use('' , email)
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});