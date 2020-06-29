const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photo', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const PhotoSchema = mongoose.Schema({
    url: String,
    des: String,
    id: String,
    type: String,
});

const PhotoModel = mongoose.model('PhotoSel', PhotoSchema);

module.exports = {PhotoModel};