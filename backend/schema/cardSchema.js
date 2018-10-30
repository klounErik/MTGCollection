const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema({
    data: {
        id: String,
        name: String,
        image: String,
        eur: Float32Array
    }
})

const Cards = mongoose.model('cards', cardSchema)

module.exports = Cards