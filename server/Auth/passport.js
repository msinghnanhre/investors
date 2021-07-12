const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

require("dotenv").config();

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/login"
},
    function (accessToken, refreshToken, profile, cb) {
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //     return cb(err, user);
        // });
        return done(null, profile);
    }
));

passport.serializeUser(function (user, done) {
    done(null, user)
})

passport.deserializeUser(function (user, done) {
    done(null, user)
})