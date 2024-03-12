const express = require("express");
const router = express.Router();
const {addTask,getAllTask,getTask} = require("../controllers/taskControllers/index");
const validateToken = require("../middlewares/validateToken");


router.route('/addtask').post(validateToken,addTask);
router.route('/getalltask').get(validateToken,getAllTask);
router.route('/gettask/:id').get(validateToken,getTask);




module.exports = router;