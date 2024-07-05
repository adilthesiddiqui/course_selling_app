// import { User } from "../db";
const { User  } = require("../db/index");
const { use } = require("../routes/admin");
const {z} = require('zod')

async function userMiddleware(req, res ,next){
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

       const user = await User.findOne({
            username: username,
            password : password
        })
        if (!user){
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

// export default userMiddleware;
module.exports = userMiddleware