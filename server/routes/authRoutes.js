const passport = require('passport');
const router = require('express').Router();
require('../Auth/passport')

router.use(passport.initialize())

router.get('/google',
    passport.authenticate('google', {scope: ['email', 'profile']})
)

router.get('/google/login',
    passport.authenticate('google',
    { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    }
)

module.exports = router;