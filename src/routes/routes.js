//C:\Users\newma\school_projects\RafifkiProjectFinal\src\routes\routes.js

const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  res.json({ message: 'CORS is working!' });
});

module.exports = router;