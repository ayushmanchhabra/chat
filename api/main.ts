import process from 'node:process';

import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';

config();

const app = express();

const host = process.env.VITE_HOST;
const port = process.env.VITE_WEB_PORT;

app.use(express.json());

app.use(cors({
  origin: `${host}:${port}`,
  optionsSuccessStatus: 200,
}));

app.get('/', (req, res, next) => {
  res.send('Hello World');
});

app.post('/api/v1/auth/signin', (req, res, next) => {

  if (
    (req.body.username === 'admin') &&
    (req.body.password === 'admin')
  ) {
    res.status(200).json({
      message: 'Sign in successful',
    });
  } else {
    res.status(401).json({
      message: 'Invalid username or password',
      data: req.body
    });
  }
});

app.listen(3000, () => {
  console.log(`Server is running on ${host}:${port}`);
});

export default app;
