const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios');

//routes 
const currencyRoutes = require('./routes/currencies')
const currencyIcons = require('./routes/currencyIcons')

//port
require("dotenv").config();
const port = process.env.PORT || 8080

//middleware
app.use(express.json())
app.use(express.static("public"))
app.use(cors())

//endpoints 
app.use('/api', currencyRoutes)
app.use('/api', currencyIcons)


app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})