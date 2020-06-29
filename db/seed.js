const mongoose = require('mongoose');

const { PhotoModel } = require('./photo.js');

// https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
const UUID = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

PhotoModel.collection.drop();

const data = [
  {
      type: 'video',
      url: 'https://www.youtube.com/embed/l9wINwlgxRU',
  },
  {
      type: 'photo',
      url: 'https://source.unsplash.com/800x450/weekly?air',
  },
  {
      type: 'photo',
      url: 'https://source.unsplash.com/800x450/weekly?earth',
  },
  {
      type: 'photo',
      url: 'https://source.unsplash.com/800x450/weekly?fire',
  },
  {
      type: 'photo',
      url: 'https://source.unsplash.com/800x450/weekly?water'
  }
];

for (let datum of data) {
  PhotoModel.create({
    url: datum.url,
    des: 'an image',
    id: UUID(),
    type: datum.type,
  })
}

PhotoModel.find().exec(function (err, photos) {
  if (err) {
    throw err;
  }
  console.log(photos);
});
