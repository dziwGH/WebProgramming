const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware 
app.use(cors());
app.use(express.json());

// connect to mongo db

mongoose.connect('mongodb://localhost:27017/blogDB', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
.catch((err)=>console.error('MongoDB error', err));

// api routes
app.use('/api/projects', projectRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/contacts', contactRoutes);

// start server
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));