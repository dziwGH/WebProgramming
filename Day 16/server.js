// import modules
const express = require('express');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000;

// apply middleware...
app.use(express.json());
app.use(loggerMiddleware);

// Mount routes...
app.use('/api', apiRoutes);

// Error handling...
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send({error: 'Internal Sever Error'});
});

