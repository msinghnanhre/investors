const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Portfolio = require('./models/Portfolio')

require("dotenv").config();



passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/login"
},
    function (accessToken, refreshToken, profile, cb) {
        // console.log(profile)
        Portfolio.findOne({ googleId: profile.id }, async function (err, user) {
            let sendUser = user;   
            if (!user) {
                try{
                    sendUser = await Portfolio.create({ googleId: profile.id })
                }
                catch (error) {
                    console.log(error)
                }
            }
            console.log(sendUser)
            return cb(err, sendUser);
        });
    }
));



passport.serializeUser(function (user, cb) {
    cb(null, user)
})

passport.deserializeUser(function (user, cb) {
    cb(null, user)
})