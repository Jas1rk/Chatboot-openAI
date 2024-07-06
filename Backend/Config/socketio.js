const socketIo = require("socket.io");

const socket = (io) => {
  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("disconnected", () => {
      console.log("user disconnected");
    });
  });
};

module.exports =  socket 
