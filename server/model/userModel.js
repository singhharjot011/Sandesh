const mongoose = require("mongoose");

// Define the User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: "/images/default_profile.jpg",
  },
  status: {
    type: String,
    enum: ["online", "offline", "away"],
    default: "offline",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  phoneNumber: {
    type: String,
    default: "",
  },
  lastLogin: {
    type: Date,
    default: null,
  },
  bio: {
    type: String,
    default: "",
  },
});

// Create the User Model
const User = mongoose.model("User", userSchema);

module.exports = User;
