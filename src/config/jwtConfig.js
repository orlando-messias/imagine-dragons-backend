require('dotenv/config');

// information to create a jwt token
module.exports = {
  secret: process.env.JWT_SECRET,
  headers: {
    expiresIn: '1d'
  }
};