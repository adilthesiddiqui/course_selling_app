const express = require('express')
const bodyParser  = require("body-parser")
const app = express();
const adminrouter = require('./routes/admin')
const userRouter = require('./routes/user') 

app.use(bodyParser.json())
app.use("/admin",adminrouter)
app.use("/user", userRouter)


app.listen(3000, ()=>{
    console.log(" app running on port 3000")
})