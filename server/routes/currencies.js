const express = require('express')
const router = express.Router()
const axios = require("axios")
const fs = require('fs')
const currencyIcons = require("../data/currencyIcons.json")

//get list of top 10 currencies
router.get('/currencyList', (req, res) => {
    axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`, {
        headers: {
            "X-CMC_PRO_API_KEY": "1299fd71-9510-472e-a5e0-4aa72fc421e0"
        }
    })
        .then((data) => {
            const list = data.data.data.filter(item => {
                return item.cmc_rank <= 10
            })
            res.status(200).json(list);
        });
});

module.exports = router