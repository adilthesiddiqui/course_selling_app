// import { Admin } from "../db";
const {Admin} = require('../db')
const {z} = require('zod')

async function adminMiddleware(req, res ,next){
    //  implement the logic to chekc if the person is an admin or not 
     const username = req.headers.username;
    const password = req.headers.password;

    // schema for validation of inputs coming in 
    const usernameSchema  = z.string()
     const  passwordSchema = z.string()
    if (!(usernameSchema.safeParse(username).success && passwordSchema.safeParse(password).success)){
        return res.status(400).json({msg : "Invalid username"})
    }


    try{

       const admin = await Admin.findOne({
            username: username,
            password : password
        })
        if (!admin){
            res.status(403).json(({msg : "User not found"}))
        }
        else{
            next()
        }}

        
    catch(err){
        console.error(err)
        res.status(500).json({msg : "Something is wrong with the server "})
    }
    
}

// export default adminMiddleware;
module.exports = adminMiddleware