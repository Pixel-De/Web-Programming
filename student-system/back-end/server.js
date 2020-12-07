const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database holbogdloo...");
});

const studentRouter = require("./routes/student");
// const usersRouter = require("./routes/users");

app.use("/student", studentRouter);
// app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server ${port} port deer aslaa...`);
});
