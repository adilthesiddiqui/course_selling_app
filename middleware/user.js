// import { User } from "../db";
const { User  } = require("../db/index");
const { use } = require("../routes/admin");

async function userMiddleware(req, res ,next){
    //  implement the logic to chekc if the person is an admin or not 
     const username = req.headers.username;
    const password = req.headers.password;

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