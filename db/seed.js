const mongoose = require('mongoose');

const { PhotoModel } = require('./photo.js');

var faker = require('faker');

// https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
var UUID = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

PhotoModel.create(null);
PhotoModel.collection.drop();

var x = 0;
var max = 100;

for (var i = 0; i < max; i++) {
  const data = [
    {
      type: 'photo',
      url: 'https://source.unsplash.com/800x450/weekly?' + faker.hacker.noun(),
    },
    {
      type: 'photo',
      url: 'https://source.unsplash.com/800x450/weekly?' + faker.hacker.noun(),
    },
    {
      type: 'photo',
      url: 'https://source.unsplash.com/800x450/weekly?' + faker.hacker.noun(),
    },
  ];
  for (var j in data) {
    var obj = {
      url: data[j].url,
      type: data[j].type,
      des: 'an image',
      uuid: UUID(),
      id: i,
      index: String(j),
    };
    PhotoModel.create(obj)
      .then(() => {
        x += 1;
        if (x == max) {
          done();
        }
      });
  }
}

var done = function () {
  console.log('seeded db');
}
