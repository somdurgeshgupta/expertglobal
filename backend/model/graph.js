const mongoose = require('mongoose');

const graphSchema = new mongoose.Schema({
    Month: String,
    "Primary product": Number,
    "Secondary product": Number
});

module.exports = mongoose.model('db', graphSchema);
