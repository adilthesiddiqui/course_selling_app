//  this file will have all our data base elated codes , it will defin the schema and how we are going to add them to the table 

const mongoose = require("mongoose")
require('dotenv').config()
// import mongoose from "mongoose

mongoose.connect(process.env.MONGODB_URL)



const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
})

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]

})

const CourseSchema = new mongoose.Schema({
    title : String,
    description : String,
    imageLink : String,
    cost : Number,
})

const Admin = mongoose.model('Admin', AdminSchema)
const User = mongoose.model('USer', UserSchema)
const Course = mongoose.model('Course', CourseSchema)

// module.exports = [
//     Admin,
//     User,
//     Course
// ]

module.exports = {
    Admin,
    User,
    Course
}