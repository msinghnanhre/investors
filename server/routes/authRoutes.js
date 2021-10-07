const passport = require('passport');
const router = require('express').Router();
require('../passport')


router.get('/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })
)

router.get('/google/login',
    passport.authenticate('google',{
        failureRedirect: '/failure'}),
        function (req, res) {
            res.redirect(`http://localhost:3000/portfolio/${req.user.googleId}`);
        }
)

router.get('/failure', ((req, res) => {
    res.send("did not work")
}))
module.exports = router;