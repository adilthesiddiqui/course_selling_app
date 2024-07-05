const express = require('express')
const router = express.Router()
const usermiddleware = require('../middleware/user')
const { Admin } = require('../')
const {z} = require("zod")
const { User, Course } = require('../db')
const { route } = require('./admin')
const { isObjectIdOrHexString } = require('mongoose')



// route to sign up for user 
router.post('/signup',async function (req, res){
    // taking in username and password frm headers
    const username = req.headers.username;
    const password = req.headers.password;
    // schema for zod validation
    const usernameSchema = z.string();
    const passwordSchema = z.string();
    if(!(usernameSchema.safeParse(username).success && passwordSchema.safeParse(password).success)){
        res.status(400).json({
            msg : "Somthing is wrong with your inputs "
        })
    }

    // creating new user in user db 
    const newuser =await User.create({
        username,
        password
    })

    console.log(newuser)

    res.status(200).json({
        msg : "User Created Successfully"
    })

})

router.post('/courses', usermiddleware , async function(req, res){

})


// a route to get all the courses listed on the web site 
router.get('/courses', async function (req ,res){
    const courses = await Course.find({})
    console.log(courses);
    res.status(200).json({courses})

})


// route to show  all course 
router.get('/course/:courseId',  async function(req, res){
    const cours_num = req.params.courseId;
    console.log(cours_num);
    const course = await Course.findById(cours_num);
    console.log(course);
    res.json({
        courses : course
    })
})


router.post('/courses/:courseId', usermiddleware,async (req, res)=>{
    const courseId = req.params.courseId;
    const username = req.headers.username;
    
    const newUser = await User.updateOne({
        username : username
    }, {
        "$push" : {
            purchasedCourses : courseId
        }
    }
);

    res.json({
        msg : "Purchase Completed"
    })
})


module.exports = router