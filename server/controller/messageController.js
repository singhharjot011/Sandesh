const Message = require("../model/messageModel");

const getAllMessages = async (req, res) => {
  const messages = await Message.find();
  res.status(200).json({
    status: "success",
    data: {
      messages,
    },
  });
};
const getCurChatMessages = async (req, res) => {
  const messages = await Message.find({ chatId: req.params.id });
  res.status(200).json({
    status: "success",
    data: {
      messages,
    },
  });
};

module.exports = { getAllMessages, getCurChatMessages };
