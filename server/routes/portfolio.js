const express = require('express')
const router = express.Router()

//
const Portfolio = require('../models/Portfolio')

//add new user in portfolio
router.post("/portfolio", async (req, res) => {
    const newPortfolio = new Portfolio(req.body);
    const savedPortfolio = await newPortfolio.save()
    res.json(newPortfolio)
})



//get protfolio for user by ID
router.get('/portfolio', async (req, res) => {
    // const portfolio = await Portfolio.find();
    res.json(portfolio)
})

module.exports = router