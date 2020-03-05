import {posts} from '../testData/posts-testdata';
import {users} from '../testData/users-testdata';
import {scullyConfig} from './config';
import {log, yellow} from './log';

const express = require('express');

export async function startDataServer(ssl: boolean) {
  try {
    if (ssl) {
      /** do the ssl thing. */
    }
    const dataServer = express();

    dataServer.use(function(req, res, next) {
      res.header('Access-Control-Allow-Origin', `${req.get('origin')}`);
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      // console.log('DS',req.path)
      next();
    });

    dataServer.get('/users', (req, res) => res.json(users));
    dataServer.get('/users/:id', (req, res) => res.json(users.find(row => row.id === +req.params.id)));
    dataServer.get('/posts', (req, res) => {
      const userId = req.query.userId;
      if (userId !== undefined) {
        return res.json(posts.filter(row => row.userId === +userId));
      }
      res.json(posts);
    });
    dataServer.get('/posts/:id', (req, res) => res.json(posts.find(row => row.id === +req.params.id)));
    dataServer.get('/slow/:delay', (req, res) => {
      const {delay: d} = req.params;
      let delay;
      try {
        delay = parseInt(d, 10);
      } catch (e) {
        delay = 1000;
      }
      if (delay === NaN) {
        delay = 1000;
      }
      setTimeout(() => res.json({delay, status: 'OK'}), delay);
    });
    return dataServer.listen(8200, scullyConfig.hostName, x => {
      log(`Test data server started on "${yellow(`http://${scullyConfig.hostName}:${8200}/`)}" `);
    });
  } catch (e) {
    /** no need for fancy handling here, its a test data server */
    console.error(e);
  }
}
