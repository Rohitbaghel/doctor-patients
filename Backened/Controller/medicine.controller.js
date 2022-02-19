const express=require('express');
const router=express.Router();
const Medicine=require('../Models/Medicine.model');

router.get('/', async (req, res) => {
    try {
        const medicine=await Medicine.find().lean().exec()
        res.status(200).json(medicine)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
});




router.post('/', async (req, res) => {
    try {
        const medicine=await Medicine.create(req.body);
        res.status(200).json(medicine)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
});

module.exports =router