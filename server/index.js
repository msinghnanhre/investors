const express = require('express')
const app = express()
const session = require('express-session')
const cors = require('cors')
const mongoose = require("mongoose")

const passport = require('passport');
require("./passport")


//check for log in
function isUserLoggedIn(req, res, next) {
    // console.log(req.user)
    if (req) {
        next()
    } else {
        res.sendStatus(401)
    }
}


//routes 
const portfolioRoutes = require("./routes/portfolio")
const authRoutes = require("./routes/authRoutes")

//port
require("dotenv").config();

//database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
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

app.use(session({
    secret: "something",
    saveUninitialized: true,
    resave: false,
}))

app.use(passport.initialize())
app.use(passport.session())


app.get('/api/portfolio/logout', (req, res) => {
    req.logout()
    req.session.destroy()
    res.redirect(`https://clever-babbage-e51da0.netlify.app/`)
})

app.use('/api', isUserLoggedIn, portfolioRoutes)
app.use('/auth', authRoutes)
app.get("/", ((req, res) => {
    res.status(200).json("Working")
}))

app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening at port ${process.env.PORT}`)
})