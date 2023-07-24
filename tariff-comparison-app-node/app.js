const express = require('express');
const app = express();

const tariffRoutes = require('./api/routes/tariffs')

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();
})
app.use(express.json())
app.use('/tariffs', tariffRoutes);

module.exports = app;