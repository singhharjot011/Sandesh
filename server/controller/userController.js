const User = require("../model/userModel");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
};
const getUser = async (req, res) => {
  const user = await User.find({ _id: req.params.id });
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

module.exports = { getAllUsers, getUser };
