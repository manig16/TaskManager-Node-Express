const mongoose = require('mongoose');

const connectMongoDB = (url) => {
  mongoose.connect(url);
};

module.exports = connectMongoDB;
