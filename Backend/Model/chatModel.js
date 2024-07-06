const { text } = require("express");
const mongoose = require("mongoose");
const chatSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    type: {
      type: String,
      enum: ["user", "bot"],
      required: true,
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatSchema, "messages", {
  capped: { size: 1024 * 1024, max: 1000 },
});
module.exports = Chat;
