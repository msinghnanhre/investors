const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    portfolio: [
        {
            currencyName: String,
            date: String,
            value: Number
        }
    ],
})

module.exports = mongoose.model('Portfolio', PortfolioSchema)
