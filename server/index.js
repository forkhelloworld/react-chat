const http = require("http");
const { Server } = require("socket.io");
const app = require("./app.js");
const { createWebsocketConnect } = require("./webSocket");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", createWebsocketConnect);

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
