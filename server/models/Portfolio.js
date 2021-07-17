const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
    googleId: String,
    portfolio: [
        {
            currencyName: String,
            assetValue: Number,
            date: Date,
            valueInAsset: Number,
            img: String
        }
    ],
})

module.exports = mongoose.model('Portfolio', PortfolioSchema)
