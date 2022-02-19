const express=require('express')
const PatientController = require('./Controller/Patient.Controller')
const MedicineController = require('./Controller/medicine.controller')
const app=express()
app.use(express.json())
app.use('/medicine',MedicineController)
app.use('/patient',PatientController)




module.exports =app