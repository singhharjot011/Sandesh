const express = require("express");
const {
  getAllMessages,
  getCurChatMessages,
} = require("../controller/messageController");

const messageRouter = express.Router();

messageRouter.get("/", getAllMessages);
messageRouter.get("/:id", getCurChatMessages);

module.exports = messageRouter;
