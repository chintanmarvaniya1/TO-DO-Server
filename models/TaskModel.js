const mongoose = require("mongoose");
const Schema = mongoose.Schema
mongoose.Promise = global.Promise;

const TASK = {
    userID: { type: String, required: true },
    taskname: { type: String, required: true, lowercase: true },
    isCompleted: { type: Boolean,default:false },
}

const taskSchema = new Schema(TASK);

module.exports = mongoose.model('TASK', taskSchema);