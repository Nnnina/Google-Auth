//common js modules
//es 2015 modules import express from 'express', react side
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const key = require('./config/keys');

require('./models/User');
require('./services/passport');

const app = express();//generate a new application, used to set up configuration(route handler)

//app.use(middleware) are small functions that can be used to modify incoming requests to our app before they sent off to route handler
//==========Middleware=============
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,   //30 days
        keys: [key.cookieKey]   //used to access cookie
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

//connect to mongoDB
mongoose.connect(key.mongoURI);

//enject environment info
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server is listening to port" + PORT);
});

//app object => server
//app.get/post/put/delete/patch route handler
//'/' => route
//req object representing the incoming request and info, res object