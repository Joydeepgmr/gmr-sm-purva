const express = require('express');
// const electricityRoutes = require('./routes/electricityRoutes');

const app = express();

app.use(express.json());

// app.use('/electricity', electricityRoutes);

module.exports = app;
