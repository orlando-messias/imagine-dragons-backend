const express = require('express');
const userRoutes = express.Router();

const userController = require('../controllers/UserConroller');

// every route to /user
userRoutes.get('/', userController.getAll);
userRoutes.post('/login', userController.login);

module.exports = userRoutes;