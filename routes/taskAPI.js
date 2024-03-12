const express = require("express");
const router = express.Router();
const {addTask,getAllTask} = require("../controllers/taskControllers/index");
const validateToken = require("../middlewares/validateToken");


router.route('/addtask').post(validateToken,addTask);
router.route('/getalltask').get(validateToken,getAllTask);




module.exports = router;