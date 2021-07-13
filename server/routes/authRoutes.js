const passport = require('passport');
const router = require('express').Router();
require('../passport')

router.get('/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })
)

router.get('/google/login',
    passport.authenticate('google',
        {failureRedirect: '/failure'}),
        function (req, res) {
            res.redirect(`http://localhost:3000/portfolio`);
        }
)

router.get('/failure', ((req, res) => {
    res.status(500).send("Please try logging in again!")
}))

module.exports = router;