const mongoose = require('mongoose');

require('dotenv/config');

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.connection.on('connected', () => {
  console.log("Connected to MongoDB!!!")
});

module.exports = mongoose;