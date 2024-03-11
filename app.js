const express = require("express");

const app = express();


app.use(express.json());
app.get("/home", async (req, res) => {
    return res.status(500).json({
      msg: "Its working",
    });
});


module.exports = app;