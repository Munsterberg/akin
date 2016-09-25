import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';

import {logger} from './util';
import db from './db';

const app = express();

app.use(morgan('combined', {stream: logger.stream}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/', (req, res) => {
  res.send('Hola');
});

db.sequelize.sync().then(() => {
  logger.info('Connected to database');
});

app.use((err, req, res, next) => {
  logger.error('unhandled application error: ', err);
  res.status(500).send(err);
});

export default app;
