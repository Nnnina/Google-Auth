const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); //fetch model class
//new GoogleStrategy():create a new instance of GoogleStrategy
//passport.use() generic register

//turn an instance(user object) into a id
passport.serializeUser((user, done) => {
    done(null, user.id);
});
//turn a piece of info into an instance
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        console.log('profile', profile);
        console.log('done', done);
        //asynchronous operation, return a promise
        const existingUser = await User.findOne({ googleId: profile.id});
        if (existingUser) {
            //already have a record with a given profile id
            return done(null, existingUser);//error + user
        }
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);

    })
);
//accessToken: reach back to google to access user info
//refreshToken: allows us to update accessToken
//identifying user information