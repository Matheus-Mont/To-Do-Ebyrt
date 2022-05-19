const { getAll, createTask, updateTask, deleteTask } = require('../services/tasksService');

const getTasks = async (req, res, _next) => {
  const tasks = await getAll();
  return res.status(200).json(tasks);
}

const createTasks = async (req, res, _next) => {
  const tasks = await createTask(req.body);
  return res.status(201).json(tasks);
}
const updateTasks = async (req, res, _next) => {
  const { id } = req.params;
  const tasks = await updateTask(id, req.body);
  return res.status(201).json(tasks);
}
const deleteTasks = async (req, res, _next) => {
  const {id} = req.params;
  const tasks = await deleteTask(id);
  return res.status(201).json(tasks);
}
module.exports = {
  getTasks,
  createTasks,
  updateTasks,
  deleteTasks
}