const socketIo = require("socket.io");

const socket = (io) => {
  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("message", (message) => {
      console.log("recievied message", message);
      io.emit("message", message);
    });

    socket.on("disconnected", () => {
      console.log("user disconnected");
    });
  });
};

module.exports = socket;
