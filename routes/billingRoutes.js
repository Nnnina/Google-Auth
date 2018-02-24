const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
    //handle token, reach out the stripe to finalize transfering
    //a reference to the function. every time this route was visited, call the middleware
    app.post('/api/stripe', requireLogin, async (req, res) => {
        //console.log(req.body);
        // make a request over to the stripe API and tell it to finalize the transaction
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });
        //console.log(charge); charge is an object
        req.user.credits += 5; //req.user set by passport
        const user = await req.user.save();
        //send back to whoever made request
        res.send(user);
    });
};