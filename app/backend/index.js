const express = require('express');
const app = express();
const taskRouter = require('./routes/tasksRoute');
const cors = require('cors');
const error = require('./middlewares/error');

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRouter);

app.use(error);

const PORT = 3001;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));