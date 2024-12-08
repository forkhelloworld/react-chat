const chatRouter = require("express").Router();
const ChatController = require("../controllers/Chat.controller");
const { checkToken } = require("../middlewares/checkToken");
// const upload = require("../middlewares/multer");

chatRouter.use(checkToken);

chatRouter.get("/", ChatController.getAllUserChats);
chatRouter.post("/", ChatController.createChat);
// chatRouter.post("/:chatId", upload.single("image"), ChatController.addMessage);
chatRouter.get("/:chatId/user/:userId", ChatController.addUserToChat);
chatRouter.get("/:chatId", ChatController.getOneChat);

module.exports = chatRouter;
