const express = require("express");
const chatRouter = require("./routes/chatRoutes");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const messageRouter = require("./routes/messageRoutes");

// CORS

app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend origin
  })
);

// ROUTES

app.use("/api/v1/chats", chatRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/messages", messageRouter);

app.all("*", (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server`);
  err.status = "fail";
  err.statusCode = 404;
  next(err);
});

module.exports = app;
