var express = require('express');
var mongoose = require('mongoose');
var shurli = require('./lib/shurli');
var config = require('./config');
var app = express();

mongoose.connect(config.mongo_url);

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index', {
    app_url: config.app_url
  });
});

app.get('/new/*', function(req, res) {
  var url = req.url.split('/new/')[1];

  shurli.newUrl(url, function(err, data) {
    if (err) return res.json(err);
    res.json(data);
  });
});

app.get('/*', function(req, res) {
  var short = req.url.slice(1);

  shurli.getOriginal(short, function(err, original) {
    if (err) return res.json(err);
    res.redirect(original);
  });
});

module.exports = app;