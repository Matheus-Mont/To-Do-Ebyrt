const express = require('express');
const app = express();
const taskRouter = require('./routes/tasksRoute');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRouter);

const PORT = 3001;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));