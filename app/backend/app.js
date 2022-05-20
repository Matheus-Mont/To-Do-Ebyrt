require('dotenv/config');
const express = require('express');
const app = express();
const taskRouter = require('./routes/tasksRoute');
const cors = require('cors');
const error = require('./middlewares/error');

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRouter);

app.use(error);

module.exports = app;