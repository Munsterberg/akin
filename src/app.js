import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/', (req, res) => {
  res.send('Hola');
});

app.use((err, req, res, next) => {
  console.log('unhandled application error: ', err);
  res.status(500).send(err);
});

export default app;
