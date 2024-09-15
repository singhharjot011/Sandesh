const fs = require("fs").promises; // Use promises version of fs
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Chat = require("../model/chatModel");
const Message = require("../model/messageModel");
const User = require("../model/userModel");

dotenv.config();

const DB = "mongodb://127.0.0.1:27017/sandesh";

mongoose
  .connect(DB)
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => console.error("DB Connection Error:", err));

// Read JSON File
const readChatsFromFile = async () => {
  try {
    const data = await fs.readFile("./chat.json", "utf-8");
    return JSON.parse(data); // Return parsed JSON data
  } catch (err) {
    console.error("Error reading JSON file:", err);
    process.exit(1);
  }
};

const readMessagesFromFile = async () => {
  try {
    const data = await fs.readFile("./message.json", "utf-8");
    return JSON.parse(data); // Return parsed JSON data
  } catch (error) {
    console.error("Error reading JSON file:", err);
    process.exit(1);
  }
};

const readUsersFromFile = async () => {
  try {
    const data = await fs.readFile("./user.json", "utf-8");
    return JSON.parse(data); // Return parsed JSON data
  } catch (error) {
    console.error("Error reading JSON file:", err);
    process.exit(1);
  }
};

// Import Data into DB
const importChatData = async () => {
  try {
    const chats = await readChatsFromFile();
    await Chat.create(chats);
    console.log("Chats Data Successfully Loaded");
    process.exit();
  } catch (err) {
    console.error("Error importing chat data:", err);
    process.exit(1);
  }
};

const importMessageData = async () => {
  try {
    const messages = await readMessagesFromFile();
    await Message.create(messages);
    console.log("Chats Data Successfully Loaded");
    process.exit();
  } catch (err) {
    console.error("Error importing chat data:", err);
    process.exit(1);
  }
};

const importUserData = async () => {
  try {
    const users = await readUsersFromFile();
    await User.create(users);
    console.log("Users Data Successfully Loaded");
    process.exit();
  } catch (err) {
    console.error("Error importing chat data:", err);
    process.exit(1);
  }
};

// Run import if `--import-chats` flag is provided
if (process.argv[2] === "--import-chats") {
  importChatData();
} else if (process.argv[2] === "--import-messages") {
  importMessageData();
} else if (process.argv[2] === "--import-users") {
  importUserData();
}
