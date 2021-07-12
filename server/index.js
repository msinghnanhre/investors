const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios');
const mongoose = require("mongoose")
//passport
const passport = require('passport');
require('./Auth/passport')


//routes 
const currencyRoutes = require('./routes/currencies')
const currencyIcons = require('./routes/currencyIcons')
const portfolioRoutes = require("./routes/portfolio")
const authRoutes = require("./routes/authRoutes")

//port
require("dotenv").config();
const port = process.env.PORT || 8080

//database
mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.once("open", () => {
    console.log("Mongoose connection is setup")
})

//middleware
app.use(express.json())
app.use(express.static("public"))
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(passport.initialize())

//endpoints 
app.use('/api/currencyList', currencyRoutes)
app.use('/api', currencyIcons)
app.use('/api/portfolio', portfolioRoutes)
app.use('/auth', authRoutes)




app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})