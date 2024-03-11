const express = require("express");
const app = express();
const AuthAPI = require("./routes/AuthAPI")
const TaskAPI = require("./routes/taskAPI");


app.use(express.json());

app.use('/api/user',AuthAPI)
app.use('/api/task',TaskAPI)

module.exports = app;