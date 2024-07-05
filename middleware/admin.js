// import { Admin } from "../db";
const {Admin} = require('../db')

async function adminMiddleware(req, res ,next){
    //  implement the logic to chekc if the person is an admin or not 
     const username = req.headers.username;
    const password = req.headers.password;

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