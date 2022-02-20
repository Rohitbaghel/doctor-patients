const express=require('express');

const router=express.Router();
const Patient=require('../Models/Patient.model')


router.get('/', async (req, res) => {
    try {
        const page = +req.query.page || 1;
        const size = +req.query.size || 10;
      
        const skip = (page - 1) * size;
        // const totalPage = Math.ceil((await users.find().countDocuments()) / size);
        const patient = await Patient.find().skip(skip).limit(size).lean().exec();
        // const patient=await Patient.find().populate('medicineId').lean().exec()
        res.status(201).json(patient)
    } catch (err) {
        res.status(500).json({message: err.message})
}
});
router.get('/:id', async (req, res) => {
    try {
        const patient=await Patient.findById(req.params.id).populate('medicineId').lean().exec()
        res.status(201).json(patient)
    } catch (err) {
        res.status(500).json({message: err.message})
}
});


router.get('/sort/sortbyGend', async (req, res) => {
    try {
        const page = +req.query.page || 1;
        const size = +req.query.size || 10;
      
        const skip = (page - 1) * size;
        const patient=await Patient.find().skip(skip).limit(size).sort({gender: 0}).lean().exec()
        res.status(200).json(patient)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})
router.get('/sort/sortbyAge', async (req, res) => {
    try {
        const page = +req.query.page || 1;
        const size = +req.query.size || 10;
      
        const skip = (page - 1) * size;
        const patient=await Patient.find().skip(skip).limit(size).sort({age: 1}).populate('medicineId').lean().exec()
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