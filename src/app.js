const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const routes = require('./routes/routes'); 


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());


app.use(express.json());


app.use(express.static(path.join(__dirname, '..', '..', 'Frontend', 'public')));

app.use('/', routes);

// Catch-all handler to serve index.html for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'public', 'index.html'));
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
