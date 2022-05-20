const express = require('express');
const rescue = require('express-rescue');
const route = express.Router();
const { getTasks, createTasks, updateTasks, deleteTasks } = require('../controllers/tasksController');
const {validateCreation, findTasks} = require('../middlewares/validations');

route.get('/', rescue(getTasks));
route.post('/', validateCreation, rescue(createTasks));
route.put('/:id', validateCreation, findTasks, rescue(updateTasks));
route.delete('/:id', findTasks, rescue(deleteTasks));

module.exports = route;