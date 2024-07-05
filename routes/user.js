const express = require('express')
const router = express.Router()
const usermiddleware = require('../middleware/user')
const { Admin } = require('../')
router.post('/signup',async function (req, res){

})

router.post('/courses', usermiddleware , async function(req, res){

})

router.get('/course', async function (req ,res){

})

module.exports = router