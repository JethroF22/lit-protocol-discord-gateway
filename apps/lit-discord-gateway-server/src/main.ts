/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';

import discordRouter from './routers/discord';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to lit-discord-gateway-server!' });
});

app.use('/discord', discordRouter);

const port = process.env.port || 5000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);

app.use((err, req, res, next) => {
  switch (err.message) {
    case 'NoCodeProvided':
      return res.status(400).send({
        status: 'ERROR',
        error: err.message,
      });
    default:
      console.log('error', err);
      return res.status(500).send({
        status: 'ERROR',
        error: err.message,
      });
  }
});
