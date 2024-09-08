import https from 'node:https';
import process from 'node:process';

import { config } from 'dotenv';
import express from 'express';

config();

const app = express();

const hostname = process.env.HOSTNAME;
const port = process.env.SERVER_PORT;

app.get('/', (_, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log(`Server is running on ${hostname}:${port}`);
});

export default app;
