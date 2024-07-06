const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const socketIo = require("socket.io");
const http = require('http')
const mongoDb = require("./Config/db");
const chatRouter = require("./Router/route");
const socket = require('./Config/socketio')
dotenv.config();
mongoDb();

app.use("/chat", chatRouter);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const io = socketIo(http.app);
socket(io)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server is running");
});






