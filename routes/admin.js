const express = require("express")
const router = express.Router()
const { Admin } = require("../db")
const adminMIddleware = require("../middleware/admin")

router.post('/signup',async function (req, res){
    const username = req.headers.username;
    const password = req.headers.password;    

    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        msg : "Admin Created successfully "
    })
})

router.post('/courses', adminMIddleware , async function(req, res){

})

router.get('/course', async function (req ,res){

})

module.exports = router;