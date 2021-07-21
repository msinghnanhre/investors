const mongoose = require('mongoose');

const Subscription = new mongoose.Schema({
    googleId: String,
    email: String,
})

module.exports = mongoose.model('SubscriptionModel', Subscription)