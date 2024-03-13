const express = require("express");
const router = express.Router();
const getStatus = require("../controllers/gerStatus")
 
router.route('/getstatus').get(getStatus);


module.exports = router;