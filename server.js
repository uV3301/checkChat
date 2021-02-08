const io = require("socket.io")(3000, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("new user");
  socket.emit("chat-message", "hello world");
});
