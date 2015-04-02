var app = require('express')(),
    bodyParser = require('body-parser'),
    debug = require('debug')('app'),
    morgan = require('morgan'),
    path = require('path'),
    fs=require("fs");
    routePath="./routers/"; //add one folder then put your route files there my router folder name is routers
    fs.readdirSync(routePath).forEach(function(file) {
        var route = routePath + file;
        debug('adding route: ' + route);
        require(route)(app);
    });

module.exports = app;

app.use(morgan('combined'));
app.use(bodyParser.json());
