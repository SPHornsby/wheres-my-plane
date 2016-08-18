var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(8000, () => console.log("Listening on 8000"));

module.exports = app;