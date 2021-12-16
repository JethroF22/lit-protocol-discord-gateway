import * as express from 'express';
import axios from 'axios';
import { catchAsync, btoa } from '../utils';

const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const redirect = encodeURIComponent('http://localhost:5000/discord/callback');

router.get('/login', (req, res) => {
  res.redirect(
    `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`
  );
});

router.get(
  '/callback',
  catchAsync(async (req, res) => {
    if (!req.query.code) throw new Error('NoCodeProvided');
    const code = req.query.code;
    console.log('code', code);
    console.log('query', req.query);
    const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    axios
      .post(
        `https://discord.com/api/oauth2/token`,
        new URLSearchParams({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code,
          grant_type: 'authorization_code',
          redirect_uri: 'http://localhost:5000/discord/callback',
          scope: 'identify',
        }),
        {
          headers: {
            Authorization: `Basic ${creds}`,
          },
        }
      )
      .then((response) =>
        res.redirect(
          `http://localhost:4200/user?token=${response.data.access_token}`
        )
      )
      .catch((error) => console.log('error', error.response.data));
  })
);

export default router;
