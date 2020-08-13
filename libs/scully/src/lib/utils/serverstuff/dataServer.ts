import { log, scullyConfig, yellow } from '../';
import { posts, users } from '../../testData';

const express = require('express');

export async function startDataServer(ssl: boolean) {
  try {
    if (ssl) {
      /** do the ssl thing. */
    }
    const dataServer = express();

    dataServer.use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', `${req.get('origin')}`);
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      // console.log('DS',req.path)
      next();
    });

    dataServer.get('/users', (req, res) => res.json(users));
    dataServer.get('/users/1/raw', (req, res) => {
      const user = users.find((row) => row.id === 1);
      res.send(`
      <h1>Raw sample page</h1>
      <p>The url "/rawData" is not provided in the sampels app, but comes from an external resource</p>
      <p> there is some script in here that triggers page-ready<p>
      <script>
        /** triggering page ready, as there is no need to wait for a timeout */
        setTimeout(() => window.dispatchEvent(new Event('AngularReady', {
          bubbles: true,
          cancelable: false
        })),10)
      </script>
      `);
    });
    dataServer.get('/users/:id', (req, res) => res.json(users.find((row) => row.id === +req.params.id)));

    dataServer.get('/posts', (req, res) => {
      const userId = req.query.userId;
      if (userId !== undefined) {
        return res.json(posts.filter((row) => row.userId === +userId));
      }
      res.json(posts);
    });
    dataServer.get('/posts/:id', (req, res) => res.json(posts.find((row) => row.id === +req.params.id)));
    dataServer.get('/slow/:delay', (req, res) => {
      const { delay: d } = req.params;
      let delay;
      try {
        delay = parseInt(d, 10);
      } catch (e) {
        delay = 1000;
      }
      if (delay === NaN) {
        delay = 1000;
      }
      setTimeout(() => res.json({ delay, status: 'OK' }), delay);
    });
    dataServer.get('/*', (req, res) => {
      res.status(404);
      res.send(`<h1>404 - ${req.url}</h1>`);
    });
    return dataServer.listen(8200, scullyConfig.hostName, (x) => {
      log(`Test data server started on "${yellow(`http://${scullyConfig.hostName}:${8200}/`)}" `);
    });
  } catch (e) {
    /** no need for fancy handling here, its a test data server */
    console.error(e);
  }
}
