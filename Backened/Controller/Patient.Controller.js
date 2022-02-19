const express=require('express');

const router=express.Router();
const Patient=require('../Models/Patient.model')


router.get('/', async (req, res) => {
    try {
        const patient=await Patient.find().populate('medicineId').lean().exec()
        res.status(201).json(patient)
    } catch (err) {
        res.status(500).json({message: err.message})
}
});
router.get('/sortbyGend', async (req, res) => {
    try {
        const patient=await Patient.find().sort({gender: 0}).populate('medicineId').lean().exec()
        res.status(200).json(patient)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})
router.get('/sortbyAge', async (req, res) => {
    try {
        const patient=await Patient.find().sort({age: 1}).populate('medicineId').lean().exec()
        res.status(200).json(patient)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.post('/', async (req, res) => {
    try {
        
        const patient=await Patient.create(req.body)
        res.status(201).json(patient)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

module.exports =router