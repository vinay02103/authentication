// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost/userapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(bodyParser.json());

app.use("/users", usersRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
