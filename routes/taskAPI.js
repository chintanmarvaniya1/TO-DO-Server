const express = require("express");
const router = express.Router();
const {addTask} = require("../controllers/taskControllers/index");

router.route('/home').get(addTask);



module.exports = router;