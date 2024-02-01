const mongoose = require('mongoose')

const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    }
},{
    timestamps: true
})


const Medicine = mongoose.model('Medicine', medicineSchema)

module.exports = Medicine