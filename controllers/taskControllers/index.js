const addTask = require('./addTask');
const getAllTask = require('./getAllTask');
const getTask = require('./getTask');
const updateTask = require('./updateTask');
const deleteTask = require('./deleteTask')

const taskController = {
    addTask,
    getAllTask,
    getTask,
    updateTask,
    deleteTask
    
  };


module.exports = taskController;
  