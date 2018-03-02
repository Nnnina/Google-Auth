const passport = require('passport');
module.exports = (app) => {
    //tells the passport use 'google' strategy, access to profile and email
    app.get('/auth/google', passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    //https://accounts.google.com/o/oauth2/v2/auth?response_type=code&
    // redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&
    // scope=profile%20email&
    // client_id=307559620215-v89627eht5s48k311iln3begbjjdl6ts.apps.googleusercontent.com
    //这个设置在google中
    app.get('/auth/google/callback', passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    );//this route have the code

    app.get('/api/logout', (req, res) => {
        req.logOut();// a function that automatically attached to req by passport
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

};