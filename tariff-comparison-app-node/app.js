const express = require('express');
const cors = require('cors');
const app = express();

const tariffRoutes = require('./api/routes/tariffs')

app.use(cors())
app.use(express.json())
app.use('/tariffs', tariffRoutes);

module.exports = app;