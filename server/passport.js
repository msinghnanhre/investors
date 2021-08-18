const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const Portfolio = require('./models/Portfolio')

require("dotenv").config();

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "https://clever-babbage-e51da0.netlify.app/auth/google/login",

},
    function (_accessToken, _refreshToken, profile, cb){ 
        Portfolio.findOne({ googleId: profile.id }, async function (err, user) {
            let sendUser = user;
            if (!user) {
                try {
                    sendUser = await Portfolio.create({ googleId: profile.id })
                }
                catch (error) {
                    console.log(error)
                }
            }
            return cb(null, sendUser);
        });
    }
));

passport.serializeUser((user, cb)=> {
    cb(null, user)
})

passport.deserializeUser((user, cb)=> {
    cb(null, user)
})
