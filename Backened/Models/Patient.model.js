const mongoose=require('mongoose');

const patientSchema=new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    photo: {type: String, required: true},
    madicineId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'medicine',
        required: true
    }]
}, {
    versionKey: false,
    timestamps: true,
  });
module.exports = mongoose.model('patient',patientSchema);