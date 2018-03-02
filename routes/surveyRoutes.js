const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

const Survey = mongoose.model('surveys');//model class

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        //req represent the incoming request coming in to our application, pull the survey
        //properties out of request
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
           title, //ES6 syntax
           subject,
           body,
           recipients: recipients.split(',').map(email => { return { email: email.trim() }}),
           _user: req.user.id, //id generate by mongo
           dateSent: Date.now()
        });// after sending email successfully , then save the survey

        const mailer = new Mailer(survey, surveyTemplate(survey));
    });
};