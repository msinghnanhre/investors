const express = require('express')
const router = express.Router()

const Portfolio = require('../models/Portfolio')


// post new asset by Id
router.post("/portfolio/:id", (req, res) => {
    const { currencyName, value, valueInAsset, img } = req.body.data
    const { id } = req.params

    let newAssetObj = {
        currencyName: currencyName,
        assetValue: value,
        date: Date.now(),
        valueInAsset: valueInAsset,
        img: img
    }

    Portfolio.findOneAndUpdate(
        { googleId: id },
        {
            $push: {
                portfolio: newAssetObj
            }
        },
        function (error, success) {
            if (error) {
                res.status(401).send("Something Went Wrong");
            } else {
                res.status(200).json("Successfully Added");
            }
        });
})


//delete asset from asset id
router.delete("/portfolio/:id/asset/:assetId", (req, res) => {
    const {id , assetId} = req.params
    Portfolio.updateOne
        (
            { googleId: id },
            { $pull: { portfolio: { _id: assetId } } },
            function (error, success) {
                if (error) {
                    res.status(401).send("Could not find the item");
                } else {
                    res.status(200).json("Successfully Deleted");
                }
            })
})

//get protfolio for user by ID
router.get('/portfolio/:id', (req, res) => {
    const { id } = req.params
    const portfolio = Portfolio.find({googleId: id})
        .then(data => {
        res.json(data[0].portfolio)
        }).catch(err => {
        console.log(err)
    })
})




module.exports = router