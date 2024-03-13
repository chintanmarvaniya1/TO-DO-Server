const express = require("express");
const app = express();
const AuthAPI = require("./routes/AuthAPI")
const TaskAPI = require("./routes/taskAPI")
const status = require("./routes/StatusAPI");


app.use(express.json());

app.use('/api/user',AuthAPI)
app.use('/api/task',TaskAPI)
app.use('/api',status)

module.exports = app;