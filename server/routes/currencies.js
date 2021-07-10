const express = require('express')
const router = express.Router()
const axios = require("axios")
const fs = require('fs')
const {paginateResult} = require("../controllers/paginate")

const currencyIcons = require("../data/currencyIcons.json")
const Portfolio = require('../models/Portfolio')

//save currencies to list from axios call 
let currencies = [];
axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`, {
    headers: {
        "X-CMC_PRO_API_KEY": "1299fd71-9510-472e-a5e0-4aa72fc421e0"
    }
}).then(data => {
    currencies = data.data.data
}).catch(err => {
    currencies.push("Currencies cant be accessed")
})

//get list of top 10 currencies
router.get('/currencyList', (req, res) => {
    const page = Number(req.query.page)
    const limit = 10

    //start and end of page 
    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    let result = {}
    //check if next page exist
    if (endIndex < currencies.length) {
        result.next = {
            page: page + 1
        }
    }

    //check if previous page exist 
    if (startIndex > 0) {
        result.previous = {
            page: page - 1
        }
    }

    result.result = currencies.slice(startIndex, endIndex)
    res.json(result)
});

router.post("/portfolio", async (req, res) => {
    const newPortfolio = new Portfolio(req.body);
    const savedPortfolio = await newPortfolio.save()
    res.json(newPortfolio)
})

router.get('/portfolio',async (req, res) => {
    const portfolio = await Portfolio.find();
    res.json(portfolio)
})

module.exports = router