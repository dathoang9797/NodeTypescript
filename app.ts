import express from 'express';
import path from 'path';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

module.exports = app;
