import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import config from './config/env/index';
import connect from './utils/db';
// Routes
import roomRouter from './resources/room/room.router';
import taskRouter from './resources/task/task.router';

const app = express();

app.use(cors());
app.use(json({ extended: true }));
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/room', roomRouter);
app.use('/task', taskRouter);

app.get('/', (req, res) => {
  res.send('Hello To My-To-Do APIS');
});

const start = async () => {
  try {
    await connect();
    app.listen(config.PORT, () => {
      console.log(`REST API on http://localhost:${config.PORT}`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

export { start, app };
