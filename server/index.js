const express = require('express');
const path = require('path');

const morgan = require('morgan');

const { PhotoModel } = require('../db/photo.js');

const { cleanOne, cleanMany } = require('./clean.js');

const app = express();
const portno = 4984;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res){
    res.sendfile('index.html', { root: __dirname + "./../pub/" } );
});

app.get('/bundle.js', function(req, res){
    res.sendfile('bundle.js', { root: __dirname + "./../pub/" } );
});

app.get('/style.css', function(req, res){
    res.sendfile('style.css', { root: __dirname + "./../pub/" } );
});

app.get('/api/photos', function (req, res) {
    PhotoModel.find(function (err, photos) {
        if (err) {
            throw err;
        }
        res.send(cleanMany(photos));
    });
});

app.listen(portno, function () {
    console.log('listening on ' + portno);
})