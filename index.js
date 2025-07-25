const express = require('express');
const app = express();

app.use(express.json());

// memory for last webhook and its signature
let lastRequest = null;
let lastSignature = null;

app.post('/webhook', (req, res) => {
  lastRequest = req.body;
  lastSignature = req.headers['x-webhook-signature'] || null;

  console.log('Received event:', req.body?.type);
  console.log('Payload:', req.body);
  console.log('Signature:', lastSignature);

  res.json({ status: 'ok' });
});

app.get('/last-webhook', (req, res) => {
  if (!lastRequest) {
    return res.status(404).json({ error: 'No webhook received yet' });
  }

  res.json({ 
    lastRequest, 
    lastSignature 
  });
});

app.post('/clear-webhooks', (req, res) => {
  lastRequest = null;
  lastSignature = null;

  res.json({ status: 'cleared' });
});

app.listen(3000, () => console.log('Listening on 3000'));
