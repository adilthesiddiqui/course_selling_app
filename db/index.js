//  this file will have all our data base elated codes , it will defin the schema and how we are going to add them to the table 

const mongoose = require("mongoose")
// import mongoose from "mongoose

mongoose.connect("mongodb+srv://adilatif24:0kpGuezyAnN1TbbA@cluster0.gyc7nv5.mongodb.net/course_selling_app")



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
    tite : String,
    description : String,
    imageLink : String,
    Cost : Number,



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