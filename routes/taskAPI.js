const express = require("express");
const router = express.Router();
const {addTask} = require("../controllers/taskControllers/index");
const validateToken = require("../middlewares/validateToken");


router.route('/addtask').post(validateToken,addTask);



module.exports = router;