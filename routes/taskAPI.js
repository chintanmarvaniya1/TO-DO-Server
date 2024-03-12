const express = require("express");
const router = express.Router();
const {addTask,getAllTask,getTask,updateTask,deleteTask} = require("../controllers/taskControllers/index");
const validateToken = require("../middlewares/validateToken");


router.route('/addtask').post(validateToken,addTask);
router.route('/getalltask').get(validateToken,getAllTask);
router.route('/gettask/:id').get(validateToken,getTask);
router.route('/updatetask/:id').put(validateToken,updateTask);
router.route('/deletetask/:id').delete(validateToken,deleteTask);




module.exports = router;