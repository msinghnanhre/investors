const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
    name: String,
    username: String,
})

module.exports = mongoose.model('Portfolio', PortfolioSchema)
