const express = require('express');
const path = require('path');

const morgan = require('morgan');

const { PhotoModel } = require('../db/photo.js');

const { cleanOne, cleanMany } = require('./clean.js');

const app = express();
const portno = 4984;

app.use(morgan('tiny'));

const api = function (res, idn) {
  if (idn === undefined) {
    idn = 0;
  }
  PhotoModel.find({id: idn})
    .then((data) => {
      res.send(cleanMany(data));
    });
};

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname + "./../pub/" });
});

app.get('/index.html', function (req, res) {
  res.sendFile('index.html', { root: __dirname + "./../pub/" });
});

app.get('/bundle.js', function (req, res) {
  res.sendFile('bundle.js', { root: __dirname + "./../pub/" });
});

app.get('/style.css', function (req, res) {
  res.sendFile('style.css', { root: __dirname + "./../pub/" });
});

app.get('/api/photos', function(req, res) {
  api(res, 0);
});

app.get('/api/photos/:id', function (req, res) {
  api(res, req.params.id);
});

app.listen(portno, function () {
  console.log('listening on ' + portno);
})