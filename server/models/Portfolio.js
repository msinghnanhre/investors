const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
    googleId: String,
    portfolio: [
        {
            currencyName: String,
            date: String,
            value: Number
        }
    ],
})

module.exports = mongoose.model('Portfolio', PortfolioSchema)
