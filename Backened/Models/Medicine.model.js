const mongoose=require('mongoose');

const medicineSchema=new mongoose.Schema({
    name: {type: String, required: true},
    quantity: {type: Number, required: true}
},
{
    versionKey: false,
    timestamps: true,
  });

module.exports=mongoose.model('medicine', medicineSchema);