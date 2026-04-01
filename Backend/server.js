const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.listen(3000);