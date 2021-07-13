const express = require('express')
const app = express()

const session = require('express-session')
const cors = require('cors')
const axios = require('axios');
const mongoose = require("mongoose")

const passport = require('passport');
require('./passport')


//routes 
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
    origin: 'http://localhost:3000',
}))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))


app.use(passport.initialize())
app.use(passport.session())


//endpoints 
app.use('/api', portfolioRoutes)
app.use('/auth', authRoutes)

// app.get('/auth/goole',
//     passport.authenticate('google', { scope: ['email', 'profile'] })
// )

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})