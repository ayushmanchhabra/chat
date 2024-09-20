import process from 'node:process';

import { config } from 'dotenv';
import express from 'express';

config();

const app = express();

const host = process.env.HOST;
const port = process.env.API_PORT;

app.get('/', (_, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log(`Server is running on ${host}:${port}`);
});

export default app;
