const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoDb = () => {
  mongoose.connect(process.env.MONOGOSE);
  mongoose.connection.on("connected", () => {
    console.log("Mongodb connected");
  });
};

module.exports = mongoDb;
