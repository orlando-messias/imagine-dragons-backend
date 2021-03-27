const express = require('express');

require('dotenv/config');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

// app available routes
app.use('/user', userRoutes);

app.listen(PORT, () =>
  console.log(`App running on port ${PORT}`));