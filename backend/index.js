const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const addUser = require("./routes/addUser");
const allBooks = require("./routes/allBook");
const db = require("./db");
const port = 3000;

// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//routes
app.use("/adduser", addUser);
app.use("/allbooks", allBooks);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
