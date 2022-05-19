const { Task } = require('../models')

const getAll = async () => {
  const tasks = await Task.findAll();
  return tasks;
}

const createTask = async (newTask) => {
  const task = await Task.create(newTask);
  return task;
}

const deleteTask = async (id) => {
  const task = await Task.destroy({where:{id}});
  return task;
}

const updateTask = async (id, changes) => {
  const task = await Task.update({...changes},{ where:{id}});
  return task;
}

module.exports = {
  getAll,
  createTask,
  updateTask,
  deleteTask,
}