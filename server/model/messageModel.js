const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  chatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  messageText: String,
  timestamp: Date,
});
const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
