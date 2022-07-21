import cool from 'cool-ascii-faces';

import express from 'express';
import { page } from './Privacy-policy-page.js';

const app = express();
const PORT = process.env.PORT || 5000;

app
  .get('/cool', (req, res) => res.send(cool()))
  .get('/', (req, res) => {
    res.send(page());
  });

app.use('/:else', (req, res) => {
  res.json({ error: { message: 'page not found' } });
});

app.use((err, req, res, text) => {
  console.error(err.stack);
  res.type('application/json');
  res.status(500).send({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
