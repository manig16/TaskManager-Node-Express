const express = require('express');

const app = express();
const morgan = require('morgan');
const config = require('./config/default.json');
const tasks = require('./routes/taskRoute');
const connectMongoDB = require('./database/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlingMiddleware = require('./middleware/error-handler');
const logStream = require('./logger/logger');

const port = config.PORT || 3000;

app.use(express.json());

app.use('/api/v1/tasks', tasks);

app.use(morgan(config.LOG_FORMAT || 'dev', { stream: logStream }));

app.use(notFound);

app.use(errorHandlingMiddleware);

const start = async () => {
  try {
    await connectMongoDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
