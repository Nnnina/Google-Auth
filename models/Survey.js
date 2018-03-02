const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,
    subject: String,
    body: String,
    recipients: [RecipientSchema],    //communicate with mongoose to tell it as string array
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0},
    _user: { type: Schema.Types.ObjectId, ref: 'User'},
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema); // get a surveys collection that store variety of surveys