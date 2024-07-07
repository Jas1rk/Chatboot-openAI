const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");
const mongoDb = require("./Config/db");
const chatRouter = require("./Router/route");
const socket = require("./Config/socketio");
dotenv.config();
mongoDb();

app.use("/chat", chatRouter);
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log("server is running");
});
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

socket(io);

