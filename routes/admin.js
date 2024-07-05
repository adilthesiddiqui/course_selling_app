const express = require("express")
const router = express.Router()
const { Admin, Course } = require("../db")
const adminMIddleware = require("../middleware/admin")
const {z} = require('zod')

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
    // add course to the backend 
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const cost = req.body.cost;

    const titleSchema = z.string()
    const descriptionSchema = z.string()
    const imageinkSchema = z.string()
    const priceSchema = z.number()

    if (!(titleSchema.safeParse(title).success && descriptionSchema.safeParse(description).success && imageinkSchema.safeParse(imageLink.success && priceSchema.safeParse(price).success))){
        res.status(400).json({
            msg : "Some error in your details sent of course"
        })
    }


     const newCourse = await Course.create({
        title,
        description,
        imageLink,
        cost
    })
    res.json({
        message : "Course created successfully"
    })

})

router.get('/courses', async function (req ,res){
        // rroute to get all the courses 
        const response = await Course.find({})
        console.log(response)

        res.json({
            Courses : response
        })
})

module.exports = router;