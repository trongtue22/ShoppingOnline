// Trong server/index.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Middlewares
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// APIs 
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});
  
// Sử dụng tệp admin.js trong tuyến /api/admin
app.use('/api/admin', require('./api/admin.js'));
// Them tep customer
app.use('/api/customer', require ('./api/customer.js'));
