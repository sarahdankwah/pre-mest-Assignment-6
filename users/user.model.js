const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    username: { type: String, unique: true, },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
})

module.exports = mongoose.model('User', schema)