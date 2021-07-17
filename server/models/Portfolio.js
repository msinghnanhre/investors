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
    chartData: [{
        currentValue: Number
    }]
})

module.exports = mongoose.model('Portfolio', PortfolioSchema)
