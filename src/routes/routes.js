const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/api/test', (req, res) => {
  res.json({ message: 'CORS is working!' });
});

module.exports = router;
