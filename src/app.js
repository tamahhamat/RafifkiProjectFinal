// C:\Users\newma\school_projects\RafifkiProjectFinal\src\app.js
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const routes = require('./routes/routes');

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: ['GET'],
}));


app.use(cors({
    origin: process.env.NODE_ENV === 'staging' ? 'https://rafikiprojectfinal.onrender.com/' : `http://localhost:${port}`,
    methods: ['GET', 'POST', 'DELETE', 'PATCH'],
    credentials: true,
  }));



app.use(express.json());

const staticPath = path.join(__dirname, '/Frontend/public');
console.log('Serving static files from:', staticPath);
app.use(express.static(staticPath));

app.use('/', routes);

// Catch-all handler to serve index.html for any other routes
app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, ' /Frontend/index.html');
    console.log('Serving index.html from:', indexPath);
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error('Error serving index.html:', err);
            res.status(err.status || 500).end();
        }
    });
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
