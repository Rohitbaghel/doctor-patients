const express=require('express')
const {register,login} = require('./Controller/doctor.Controller')
const app=express()
app.use(express.json())


app.use("/register",register)


app.use("/login",login)
module.exports =app