const express = require("express");
const app = express();
const TaskAPI = require("./routes/taskAPI");


app.use(express.json());

app.use('/api/task',TaskAPI)

module.exports = app;