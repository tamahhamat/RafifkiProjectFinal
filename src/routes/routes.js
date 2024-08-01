//C:\Users\newma\school_projects\RafifkiProjectFinal\src\routes\routes.js

const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/test', (req, res) => {
  res.json({ message: 'CORS is working!' });
});






// Route to serve home.html
router.get('/', (req, res) => {
  console.log(__dirname);
    res.sendFile(path.join(__dirname,  '../../FrontEnd/index.html'));
});



module.exports = router;