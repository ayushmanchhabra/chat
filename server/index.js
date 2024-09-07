import https from 'node:https';

import express from 'express';

const app = express();

const hostname = import.meta.env.HOSTNAME;
const port = import.meta.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log(`Server is running on ${hostname}:${port}`);
});
