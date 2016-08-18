var notify = require('express').Router();

var twilioClient = require('../twilioClient');
var admins = require('../config/users.json');

function formatMessage(errorToReport) {
  return '[This is a test] ALERT! It appears the server is' +
    ' having issues. Exception: ' + errorToReport +
    '. Go to: redacted ' +
    'for more details.';
};

function notifyOnError(appError) {
  console.log("notifying, maybe")
  admins.forEach(function(admin) {
    console.log("sending to user");
    var messageToSend = formatMessage("appError.message");
    twilioClient.sendSms(admin.phoneNumber, messageToSend);
  });
};

notify.get('/', function(req, res) {
  console.log('notify');
  notifyOnError("error 5");
  res.send('notify hit');
});

module.exports = notify;