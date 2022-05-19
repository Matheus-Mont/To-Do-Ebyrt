const { Task } = require('../models')

// const name = async (req, res, next) => {};

const validateCreation = async (req, res, next) => {
  const { title, description, status } = req.body;
  const check = title && description && status;

  if (!check) return res.status(400).json({message: 'Fields must not be empty'});

  next();
};

const findTasks = async (req, res, next) => {
  const {id} = req.params;
  const task = await Task.findOne({ where: { id } });

  if(!task) return res.status(406).json({message: "There's nothing here"});
  next();
};

module.exports = {
  validateCreation,
  findTasks
}