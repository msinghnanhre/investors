const express = require('express')
const router = express.Router()
const currencyIcons = require("../data/currencyIcons.json")


router.get("/currencyIcons", ((req, res) => {
    res.status(200).json(currencyIcons)
}))


module.exports = router