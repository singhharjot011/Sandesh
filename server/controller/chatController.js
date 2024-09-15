const Chat = require("../model/chatModel");

const getAllChats = async (req, res) => {
  const chats = await Chat.find().populate({
    path: "participants",
    select: "name email profilePicture bio phoneNumber status",
  });
  res.status(200).json({
    status: "success",
    data: {
      chats,
    },
  });
};

module.exports = { getAllChats };
