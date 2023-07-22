const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.resolve('views','home')));
app.use('/css', express.static(path.resolve('views','css')));


module.exports = app;
