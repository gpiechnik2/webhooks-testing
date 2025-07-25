const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Received event:', req.body?.type);
  console.log('Payload:', req.body);
  res.json({ status: 'ok' });
});

app.listen(3000, () => console.log('Listening on 3000'));

