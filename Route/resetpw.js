const user = require("../Modal/user");
const cors= require('cors')
const sendemail = require("../utils/email");
const crypto = require("crypto");

const express = require("express");
const router = express.Router();
let corsoptions={
    origin:['http://localhost:7000']
}

router.post("/password-reset",sendemail, cors(corsoptions),async (req, res) => {
    const email = req.body.email

    try {
        await sendemail(email, "Password reset")
        res.status(200).json('email sent')
    } catch (error) {
        res.status("An error occured");
        console.log(error);
    }
});



module.exports = router;