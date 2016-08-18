var express = require('express');
var app = express();

var notify = require('./routes/notify');

app.use(express.static('public'));
app.use('/notify',notify);
app.listen(8000, () => console.log("Listening on 8000"));

module.exports = app;