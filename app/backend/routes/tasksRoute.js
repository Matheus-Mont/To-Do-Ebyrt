const express = require('express');
const route = express.Router();
const { getTasks, createTasks, updateTasks, deleteTasks } = require('../controllers/tasksController');

route.get('/', getTasks);
route.post('/', createTasks);
route.put('/:id', updateTasks);
route.delete('/:id', deleteTasks);

module.exports = route;