import dotenv from 'dotenv';
import express from 'express';

import mongoose from 'mongoose';

dotenv.config();

export const app = express();

const port = process.env.PORT_SERVER;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose.connect('mongodb://localhost:27017/bot', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
