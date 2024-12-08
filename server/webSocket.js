const NotificationController = require("./controllers/Notification.controller");
const WSChatController = require("./controllers/WS.Chat.controller");
const SocketIOFileUpload = require("socketio-file-upload");
const fs = require("fs/promises");
const {
  CONSTANTS: { NEW_MESSAGE, ADD_MESSAGE_TO_CHAT, IMAGE_STATIC_PATH },
} = require("./constants");
const { uploader } = require("./middlewares/wsUploader");

module.exports.createWebsocketConnect = (socket) => {
  console.log("CONNECTION  IS ON");

  socket.on(NEW_MESSAGE, async (message) => {
    const fileName = await uploader(message.image);
    const returnedMessage = await WSChatController.addMessage({
      ...message,
      imagePath: fileName,
    });
    socket.emit(ADD_MESSAGE_TO_CHAT, returnedMessage);
  });
};
