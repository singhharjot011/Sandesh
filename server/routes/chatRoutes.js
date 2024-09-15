const express = require("express");
const { getAllChats } = require("../controller/chatController");

const chatRouter = express.Router();

chatRouter.get("/", getAllChats);

module.exports = chatRouter;
