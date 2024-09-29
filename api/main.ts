import process from 'node:process';

import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';

config();

const app = express();

const host = process.env.VITE_HOST;
const web_port = process.env.VITE_WEB_PORT;
const api_port = process.env.VITE_API_PORT;

const admin_user = process.env.VITE_ADMIN_USER;
const admin_pswd = process.env.VITE_ADMIN_PSWD;

app.use(express.json());

app.use(cors({
  origin: `${host}:${web_port}`,
  optionsSuccessStatus: 200,
}));

app.get('/', (req, res, next) => {
  res.send('Hello World');
});

app.post('/api/v1/auth/signin', (req, res, next) => {
  if (
    (req.body.username === admin_user) &&
    (req.body.password === admin_pswd)
  ) {
    res.status(200).json({
      message: 'Sign in successful',
    });
  } else if (false) {
    // search db
  } else {
    res.status(401).json({
      message: 'Invalid username or password',
    });
  }
});

app.listen(3000, () => {
  console.log(`Server is running on ${host}:${api_port}`);
});

export default app;
